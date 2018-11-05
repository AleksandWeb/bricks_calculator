import React, { Component } from 'react';

import AllVolumeResults from './resultPageParts/allVolumeResults';
import CountBricksTable from './resultPageParts/countBricksTable';

class ResultPage extends Component {

    render() {

        const {wallSizes, resultData, priceChange, renders} = this.props;

        return (
           <div id={'resultPage'}>
                <p className={'fieldsGroupName'}>Объёмы всех стен:</p>
                <AllVolumeResults
                    wallSizes={wallSizes}
                    resultVolume={resultData.resultVolume}
                    renders={renders.AllVolumeResults}
                />
                <hr /><hr />
               <p className={'fieldsGroupName'}>Количество кирпичей:</p>
               <CountBricksTable
                   resultData={resultData}
                   priceChange={priceChange}
                   renders={renders.CountBricksTable}
               />
            </div>
        )
    }

}

export default ResultPage;