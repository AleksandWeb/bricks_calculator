import React, { Component } from 'react';
import WallFields from "./wallFields";
import ResultPage from "./resultPage";
import NavBtns from "./navBtns";

class CalcForms extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.renders.needUpdate;
    }

    addWall(index)          { this.props.addWall(index); }
    addProem(index)         { this.props.addProem(index); }

    render() {
        console.log('render calcForms');
        const {
            wallSizes,
            resultPage,
            resultData,
            wallSizeActiveIndex,
            setActiveWall,
            addWall,
            addProem,
            changeWallParam,
            changeProemParam,
            showResultPage,
            priceChange,
            renders
        } = this.props;

        let walls = "";

        let widthBtns = wallSizes.map((value, index) => {

            let active = (wallSizeActiveIndex === value.wallTypeIndex);
            if(active) {
                walls = <WallFields
                    key={index}
                    addWall={addWall.bind(this, value.wallTypeIndex)}
                    addProem={addProem.bind(this, value.wallTypeIndex)}
                    values={value}
                    changeWallParam={changeWallParam}
                    changeProemParam={changeProemParam}
                    renders={renders.WallFields}
                />
            }
            return {
                key:index,
                value:value.type,
                active:active,
                wallTypeIndex:value.wallTypeIndex,
                setActive:setActiveWall
            }
        });

        const resultPageContent =
            <ResultPage
                wallSizes={this.props.wallSizes}
                resultData={resultData}
                priceChange={priceChange}
                renders={renders.ResultPage}/>

        return (
            <div id="wallsSizes" >
                <hr /><hr />
                <p className="componentName" >Расчёт объёма стен</p>
                <div className="w30">
                    <NavBtns
                        wallSizes={wallSizes}
                        showResultPage={showResultPage}
                        resultPage={resultPage}
                        widthBtns={widthBtns}
                        renders={this.props.renders.NavBtns}
                    />
                </div>
                <div className="w70">
                    <div className="wallFields">
                        {resultPage ? resultPageContent : walls}
                    </div>
                </div>
            </div>
        );
        
    }
}

export default CalcForms;