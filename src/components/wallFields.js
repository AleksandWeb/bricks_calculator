import React, { Component } from 'react';

import WallsVoulumeTable from './wallFieldParts/wallsVoulumeTable';
import ProemsVoulumeTable from "./wallFieldParts/proemsVoulumeTable";
import ResultVolumeTable from "./wallFieldParts/resultVolumeTable";

class WallFields extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.renders.needUpdate;
    }
    
    render() {

        console.log('render WallFields');

        const {
            walls,
            proems,
            width,
            volumeWallsResult,
            type,
            volumeProemsResult,
            volumeResult,
            wallTypeIndex,
        } = this.props.values;

        const {
            changeWallParam,
            changeProemParam,
            addWall,
            addProem
        } = this.props;


        return (
            <React.Fragment>

                <h2>Расчет стен {type} - толщина стен {width} мм</h2>
                <p className="fieldsGroupName">Введите размеры стен для вычисления объема</p>

                <WallsVoulumeTable
                    addWall={addWall}
                    volumeWallsResult={volumeWallsResult}
                    walls={walls}
                    changeWallParam={changeWallParam}
                    typeIndex={wallTypeIndex}
                    renders={this.props.renders.WallsVoulumeTable}
                />

                <p className="fieldsGroupName">Введите размеры проёмов (оконных, дверных и т. п.)</p>

                <ProemsVoulumeTable
                    addProem={addProem}
                    volumeProemsResult={volumeProemsResult}
                    proems={proems}
                    changeProemParam={changeProemParam}
                    typeIndex={wallTypeIndex}
                    renders={this.props.renders.ProemsVoulumeTable}
                />

                <p className="fieldsGroupName">Вычитаем из объема стен объем проемов:</p>

                <ResultVolumeTable
                    volumeWallsResult={volumeWallsResult}
                    volumeProemsResult={volumeProemsResult}
                    volumeResult={volumeResult}
                    renders={this.props.renders.ResultVolumeTable}
                />
                <hr />
                <p className="fieldsGroupName">&lt;&lt; Далее, в меню слева выберите нужную вкладку</p>

            </React.Fragment>
        );
        
    }
}

export default WallFields;