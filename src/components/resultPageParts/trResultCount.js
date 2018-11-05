import React, {Component} from "react";

class TrResultCount extends  Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.renders.needUpdate;
    }

    render() {

        const {odinarniyResultCount, polutorniyResultCount} = this.props;

        return (
            <tr>
                <td>{odinarniyResultCount.toLocaleString('ru-RU')} шт</td>
                <td>{polutorniyResultCount.toLocaleString('ru-RU')} шт</td>
            </tr>
        );
    }

}

export default TrResultCount;