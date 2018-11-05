import React, {Component} from "react";

import TrCountM3 from './trCountM3';                //количество кирпичей в 1 кубическом метре
import TrResultCount from './trResultCount';        //количество всего
import TrBricksPrices from './trBricksPrices';      //цена одного кирпича
import TrResultPrices from './trResultPrices';      //цена всех кирпичей

class CountBricksTable extends  Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.renders.needUpdate;
    }

    render() {

        const {resultData, priceChange, renders} = this.props;

        return (
            <table className={'countBricks'}>
                <tbody>
                <TrCountM3
                    odinarniyCountM3={resultData.odinarniyCountM3}
                    polutorniyCountM3={resultData.polutorniyCountM3}
                />
                <TrResultCount
                    odinarniyResultCount={resultData.odinarniyResultCount}
                    polutorniyResultCount={resultData.polutorniyResultCount}
                    renders={renders.TrResultCount}
                />
                <TrBricksPrices
                    odinarniyPrice={resultData.odinarniyPrice}
                    polutorniyPrice={resultData.polutorniyPrice}
                    priceChange={priceChange}
                    renders={renders.TrBricksPrices}
                />
                <TrResultPrices
                    odinarniyResultSumm={resultData.odinarniyResultSumm}
                    polutorniyResultSumm={resultData.polutorniyResultSumm}
                    renders={renders.TrResultPrices}
                />
                </tbody>
            </table>
        );
    }

}

export default CountBricksTable;