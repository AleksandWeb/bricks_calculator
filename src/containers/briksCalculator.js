import React, { Component } from 'react';

import { connect } from "react-redux";

import {    setWallType,            // Выбор видов кладки
            setActiveWall,          // Установление активным вида стены
            addWall,                // Добавление стены
            changeWallParam,        // Изменение параметров стены
            addProem,               // Добавление проема
            changeProemParam,       // Изменение параметров проема
            showResultPage,         // Устанавливливаем активной вкладку с итоговыми данными
            priceChange             // Изменение цены одного кирпича, пересчет цены всех кирпичей
} from "../actions/actionWallTypes";

import WallTypes from "../components/wallTypes";
import CalcForms from "../components/calcForms";

class BriksCalculator extends Component {

    render() {
        let {
            wallTypes,
            wallSizes,
            resultPage,
            resultData,
            wallSizeActiveIndex,
            setWallType,
            setActiveWall,
            addWall,
            addProem,
            changeWallParam,
            changeProemParam,
            showResultPage,
            priceChange,
            renders
        } = this.props;

        wallSizes = wallSizes.filter((value) => value.visible === true);
        return (
            <div id="bricksCalculator">
                <h2>Калькулятор расчета кирпичей</h2>
                <WallTypes
                    wallTypes={wallTypes}
                    setWallType={setWallType}
                    renders={renders.WallTypes} />

                {(wallSizes.length > 0) &&
                <CalcForms
                    wallSizes={wallSizes}
                    wallSizeActiveIndex={wallSizeActiveIndex}
                    setActiveWall={setActiveWall}
                    addWall={addWall}
                    changeWallParam={changeWallParam}
                    addProem={addProem}
                    changeProemParam={changeProemParam}
                    showResultPage={showResultPage}
                    resultPage={resultPage}
                    resultData={resultData}
                    priceChange={priceChange}
                    renders={renders.CalcForms} />}
            </div>
        );
    }
}

const mapStateToProps = store => {
    return store.wallTypeItems;
}

function mapDispatchToProps(dispatch) {
    return {
        setWallType: (checked, typeIndex) => {
            dispatch(setWallType(checked, typeIndex))
        },
        setActiveWall: index => {
            dispatch(setActiveWall(index));
        },
        addWall: index => {
            dispatch(addWall(index));
        },
        changeWallParam: (params) => {
            dispatch(changeWallParam(params));
        },
        changeProemParam: (params) => {
            dispatch(changeProemParam(params));
        },
        addProem: index => {
            dispatch(addProem(index));
        },
        showResultPage: () => {
            dispatch(showResultPage());
        },
        priceChange: (params) => {
            dispatch(priceChange(params));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BriksCalculator);