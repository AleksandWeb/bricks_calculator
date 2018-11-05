import React, {Component} from "react";

class TrCountM3 extends  Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {

        const {odinarniyCountM3, polutorniyCountM3} = this.props;

        return (
            <tr>
                <th>Одинарного ({odinarniyCountM3} шт/м<sup>3</sup>)</th>
                <th>Полуторного ({polutorniyCountM3} шт/м<sup>3</sup>)</th>
            </tr>
        );
    }

}

export default TrCountM3;