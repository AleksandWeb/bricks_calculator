import React, { Component } from 'react';

class WallsTheader extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        console.log( 'render WallsTheader');
        return (
            <tr>
                <th>№</th>
                <th>Длина <br /> стены (м)</th>
                <th>Высота  <br />стены (м)</th>
                <th>Количество <br /> таких стен</th>
                <th>Объем (м<sup>3</sup>)</th>
            </tr>
        )
    }

}

export default WallsTheader;