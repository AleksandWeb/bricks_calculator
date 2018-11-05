import React, {Component} from 'react';

class TrResultPrices extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.renders.needUpdate;
    }

    render () {

        const {odinarniyResultSumm, polutorniyResultSumm} = this.props;

        return (
            <tr>
                <td><span className="fieldPrice">
                    <span className="label">Цена итого:</span><br />
                    <input
                        type="text"
                        name="odinarniyPrice"
                        value={odinarniyResultSumm.toLocaleString('ru-RU')}
                        readOnly
                    />
                    </span>
                </td>
                <td><span className="fieldPrice">
                    <span className="label">Цена итого:</span><br />
                    <input
                        type="text"
                        name="odinarniyPrice"
                        value={polutorniyResultSumm.toLocaleString('ru-RU')}
                        readOnly
                    />
                    </span>
                </td>
            </tr>
        );
    }
}

export default TrResultPrices;