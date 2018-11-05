import React, { Component } from 'react';

class ProemsTheader extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <tr>
                <th>№</th>
                <th>Ширина <br /> проема (м)</th>
                <th>Высота  <br />проема (м)</th>
                <th>Количество <br /> таких проемов</th>
                <th>Объем (м<sup>3</sup>)</th>
            </tr>
        )
    }

}

export default ProemsTheader;