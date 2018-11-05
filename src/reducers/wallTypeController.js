import img_05 from '../img/brick_05.png';
import img_10 from '../img/brick_10.png';
import img_15 from '../img/brick_15.png';
import img_20 from '../img/brick_20.png';
import img_25 from '../img/brick_25.png';

const initialState = {
    wallTypes: [                    // Виды кладок (во сколько кирпичей толщина стены)
        {
            type: "в полкирпича",
            width: 120,
            img: img_05,
            checked: false,
        },
        {
            type: "в один кирпич",
            width: 250,
            img: img_10,
            checked: false,
        },
         {
            type: "в полтора кирпича",
            width: 380,
            img: img_15,
            checked: false,
        },
         {
            type: "в два кирпича",
            width: 510,
            img: img_20,
            checked: false,
        },
         {
            type: "в два с половиной кирпича",
            width: 640,
            img: img_25,
            checked: false,
        }
    ],
    wallSizes: [],                  // Данные размеров стен каждого вида
    wallSizeActiveIndex: null,      // Индекс выбранной для редактирования стены
    resultPage: false,              // Активна страница результатов расчета
    resultData: {                   // Итоговые данные расчета
        resultVolume: 0,            // Сумма объемов всех стен
        odinarniyCountM3: 394,      // Количество одинарного кирпича в кубическом метре
        polutorniyCountM3: 302,     // Количество полуторного кирпича в кубическом метре
        odinarniyResultCount: 0,    // Количество одинарного кирпича для всех стен
        polutorniyResultCount: 0,   // Количество полуторного кирпича для всех стен
        odinarniyPrice: 0,          // Цена одного одинарного кирпича
        polutorniyPrice: 0,         // Цена одного полуторного кирпича
        odinarniyResultSumm: 0,     // Цена всех одинарных кирпичей
        polutorniyResultSumm: 0     // Цена всех полуторных кирпичей
    },
    renders: {                      // какие компоненты нужно перерендрить
        WallTypes: {
            needUpdate: false,
            TypeItem: [],  //индескы
        },
        CalcForms: {
            needUpdate: false,
            NavBtns: {
                needUpdate: false,
                WidthBtn: []
            },
            WallFields: {
                needUpdate: false,
                WallsVoulumeTable: {
                    needUpdate: false,
                },
                ProemsVoulumeTable: {
                    needUpdate: false,
                },
                ResultVolumeTable: {
                    needUpdate: false,
                }
            },
            ResultPage: {
                needUpdate: false,
                AllVolumeResults: {
                    needUpdate: false,
                },
                CountBricksTable: {
                    needUpdate: false,
                    TrResultCount: {
                        needUpdate: false,
                    },
                    TrBricksPrices: {
                        needUpdate: false,
                    },
                    TrResultPrices: {
                        needUpdate: false,
                    }
                }
            }
        }
    }
},

wallParams = {
    length: "",
    height: "",
    count: 1,
    volume: 0,
    volumeResult: 0
},

wallSizesTemp = {
    wallTypeIndex: null,
    visible: true,
    volumeWallsResult: 0,
    volumeProemsResult: 0,
    volumeResult: 0
}

/**  calcVolume возвращает новый объект полученый из resultData с пересчитанными данным
*   параметры:
*   wallSizes - массив с данными о всех стенах
*   resultData - Итоговые данные расчета
**/
const calcVolume = function(wallSizes, resultData) {

    let resultVolume = 0;

    wallSizes.forEach(function(item, i) {
        if(item.visible === true) {
            resultVolume += item.volumeWallsResult;
            resultVolume -= item.volumeProemsResult;
        }
    });

    let odinarniyResultCount    = resultVolume * resultData.odinarniyCountM3,
        polutorniyResultCount   = resultVolume * resultData.polutorniyCountM3,
        odinarniyResultSumm     = odinarniyResultCount * resultData.odinarniyPrice,
        polutorniyResultSumm    = polutorniyResultCount * resultData.polutorniyPrice;

    return { ...resultData,
        resultVolume: Math.round(resultVolume * 1000) / 1000,
        odinarniyResultCount: Math.ceil(odinarniyResultCount),
        polutorniyResultCount: Math.ceil(polutorniyResultCount),
        odinarniyResultSumm: Math.round(odinarniyResultSumm * 100) / 100,
        polutorniyResultSumm: Math.round(polutorniyResultSumm * 100) / 100,
    }

}

export default function wallTypeItems(state = initialState, action) {
    
    let wT      = state.wallTypes,                  // Виды кладок ( во сколько кирпичей толщина стены)
        wS      = state.wallSizes,                  // Данные размеров стен каждого вида
        wSAI    = state.wallSizeActiveIndex,        // Индекс выбранной для редактирования стены
        rD      = state.resultData;                 // Итоговые данные расчета

    /** newRenders описывает дерево компонентов, которые нужно перерендривать
     * при каждом действии нужно устанавить "needUpdate: true"
     * для тех компонентов, которые необходимо перерендрить.
     */
    let newRenders = {
        WallTypes: {
            needUpdate: false,
            TypeItem: [],  //индескы
        },
        CalcForms: {
            needUpdate: false,
            NavBtns: {
                needUpdate: false,
                WidthBtn: []
            },
            WallFields: {
                needUpdate: false,
                WallsVoulumeTable: {
                    needUpdate: false,
                },
                ProemsVoulumeTable: {
                    needUpdate: false,
                },
                ResultVolumeTable: {
                    needUpdate: false,
                }
            },
            ResultPage: {
                needUpdate: false,
                AllVolumeResults: {
                    needUpdate: false,
                },
                CountBricksTable: {
                    needUpdate: false,
                    TrResultCount: {
                        needUpdate: false,
                    },
                    TrBricksPrices: {
                        needUpdate: false,
                    },
                    TrResultPrices: {
                        needUpdate: false,
                    }
                }
            }
        }
    };

    switch (action.type) {

        // Выбор видов кладки
        case "CHANGE_TYPE":
            let index = action.payload.typeIndex;

            wT[index].checked = !action.payload.checked;

            if( wT[index].checked ) {
                if(typeof(wS[index]) === "object") {
                    wS[index].visible = true;  
                } else {
                    wS[index] = {...wallSizesTemp, wallTypeIndex: index};
                    wS[index].type = wT[index].type;
                    wS[index].width = wT[index].width;
                    wS[index].walls = [wallParams];
                    wS[index].proems = [wallParams];
                }
                if(wSAI === null && !state.resultPage) {
                    wSAI = index;
                }
            } else {
                wS[index].visible = false;

                if(index === state.wallSizeActiveIndex && !state.resultPage) {
                    let wSVisible = wS.filter(val => val.visible === true);
                        wSAI = (wSVisible.length) ? wSVisible[0].wallTypeIndex : null;
                        newRenders.CalcForms.NavBtns.WidthBtn.push(wSAI);
                }
                
            }

            rD = calcVolume(wS, rD);

            newRenders.WallTypes.needUpdate = true;
            newRenders.WallTypes.TypeItem.push(index);

            newRenders.CalcForms.needUpdate = true;
            newRenders.CalcForms.NavBtns.needUpdate = true;

            if(state.resultPage) {
                newRenders.CalcForms.ResultPage.needUpdate = true;
                newRenders.CalcForms.ResultPage.AllVolumeResults.needUpdate = true;
                newRenders.CalcForms.ResultPage.CountBricksTable.needUpdate = true;
                newRenders.CalcForms.ResultPage.CountBricksTable.TrResultCount.needUpdate = true;
                newRenders.CalcForms.ResultPage.CountBricksTable.TrResultPrices.needUpdate = true;
            }

            return {...state, wallTypes: wT, wallSizes: wS, wallSizeActiveIndex: wSAI, resultData: rD, renders: newRenders }


        // Установление активным вида стены
        case "SET_ACTIVE_WALL":
            newRenders.CalcForms.needUpdate = true;
            newRenders.CalcForms.NavBtns.needUpdate = true;

            if(state.resultPage){
                newRenders.CalcForms.NavBtns.WidthBtn.push(100, action.payload);
            } else {
                newRenders.CalcForms.NavBtns.WidthBtn.push(wSAI, action.payload);
            }

            return {...state, wallSizeActiveIndex: action.payload, resultPage: false, renders: newRenders }


        // Добавление стены
        case "ADD_WALL":

            wS.forEach(function(item, i) {
                if(item.wallTypeIndex === action.payload) {
                    item.walls.push(wallParams);
                }
            });

            newRenders.CalcForms.needUpdate = true;
            newRenders.CalcForms.WallFields.needUpdate = true;
            newRenders.CalcForms.WallFields.WallsVoulumeTable.needUpdate = true;

            return {...state, wallSizes: wS, renders: newRenders }


        // Изменение параметров стены
        case "CHANGE_WALL_PARAM":
            
            wS.forEach(function(item, i) {
                if(item.wallTypeIndex === action.payload.typeIndex) {
                    let newWall = {...item.walls[action.payload.index], [action.payload.name]: action.payload.value};
                    
                    newWall.volume = newWall.length * newWall.height * item.width / 1000;
                    newWall.volumeResult = Math.round(newWall.volume * newWall.count * 1000)/1000;
                    
                    item.walls[action.payload.index] = Object.assign(
                            {},
                            item.walls[action.payload.index],
                            newWall);
                    
                    item.volumeWallsResult = 0;
                    item.walls.map((value)=>{
                        return item.volumeWallsResult += value.volumeResult;
                    });
                    item.volumeResult = Math.round((item.volumeWallsResult - item.volumeProemsResult)*1000)/1000;
                }
            });
            rD = calcVolume(wS, rD);

            newRenders.CalcForms.needUpdate = true;
            newRenders.CalcForms.WallFields.needUpdate = true;
            newRenders.CalcForms.WallFields.WallsVoulumeTable.needUpdate = true;
            newRenders.CalcForms.WallFields.ResultVolumeTable.needUpdate = true;

            return {...state, wallSizes: wS, resultData: rD, renders: newRenders }


       // Добавление проема
       case "ADD_PROEM":
            wS.forEach(function(item, i) {
                if(item.wallTypeIndex === action.payload) {
                    item.proems.push(wallParams);
                }
            });

           newRenders.CalcForms.needUpdate = true;
           newRenders.CalcForms.WallFields.needUpdate = true;
           newRenders.CalcForms.WallFields.ProemsVoulumeTable.needUpdate = true;

           return {...state, wallSizes: wS, renders: newRenders }


       //Изменение параметров проема
        case "CHANGE_PROEM_PARAM":

            wS.forEach(function(item, i) {
                if(item.wallTypeIndex === action.payload.typeIndex) {
                    let newProem = {...item.proems[action.payload.index], [action.payload.name]: action.payload.value};
                    
                    newProem.volume = newProem.length * newProem.height * item.width / 1000;
                    newProem.volumeResult = Math.round(newProem.volume * newProem.count * 1000)/1000;
                    
                    item.proems[action.payload.index] = Object.assign(
                            {},
                            item.proems[action.payload.index],
                            newProem);
                    
                    item.volumeProemsResult = 0;
                    item.proems.map((value)=>{
                        return item.volumeProemsResult += value.volumeResult;
                    });
                    item.volumeResult = Math.round((item.volumeWallsResult - item.volumeProemsResult)*1000)/1000;
                }
            });
            rD = calcVolume(wS, rD);

            newRenders.CalcForms.needUpdate = true;
            newRenders.CalcForms.WallFields.needUpdate = true;
            newRenders.CalcForms.WallFields.ProemsVoulumeTable.needUpdate = true;
            newRenders.CalcForms.WallFields.ResultVolumeTable.needUpdate = true;

            return {...state, wallSizes: wS, resultData: rD, renders: newRenders }


       // Устанавливливаем активной вкладку с итоговыми данными
        case "RESULT_PAGE":

            newRenders.CalcForms.needUpdate = true;
            newRenders.CalcForms.NavBtns.needUpdate = true;
            newRenders.CalcForms.NavBtns.WidthBtn.push(wSAI, 100);

            return {...state, resultPage: true, wallSizeActiveIndex: false, renders: newRenders }



        // Изменение цены одного кирпича, пересчет цены всех кирпичей
        case "SET_PRICE":
            let resultSumm = 0;

            if(action.payload.name === "odinarniyPrice") {
                resultSumm = Math.round(rD.odinarniyResultCount * action.payload.value * 100) / 100;
                rD = { ...rD, odinarniyPrice: action.payload.value, odinarniyResultSumm: resultSumm};
            } else if (action.payload.name === "polutorniyPrice") {
                resultSumm = Math.round(rD.polutorniyResultCount * action.payload.value* 100) / 100;
                rD = { ...rD, polutorniyPrice: action.payload.value, polutorniyResultSumm: resultSumm};
            }

            newRenders.CalcForms.needUpdate = true;
            newRenders.CalcForms.WallFields.needUpdate = true;

            if(state.resultPage) {
                newRenders.CalcForms.ResultPage.needUpdate = true;
                newRenders.CalcForms.ResultPage.AllVolumeResults.needUpdate = false;
                newRenders.CalcForms.ResultPage.CountBricksTable.needUpdate = true;
                newRenders.CalcForms.ResultPage.CountBricksTable.TrResultCount.needUpdate = false;
                newRenders.CalcForms.ResultPage.CountBricksTable.TrBricksPrices.needUpdate = true;
                newRenders.CalcForms.ResultPage.CountBricksTable.TrResultPrices.needUpdate = true;
            }

            return {...state, resultData: rD, renders: newRenders }
	default:
		return state;
	}
}
