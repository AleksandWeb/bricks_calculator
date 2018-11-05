import React, { Component } from 'react';
import WallsTheader from "./wallsTheader";
import WallFieldsTr from "./wallFieldsTr";

class WallsVoulumeTable extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.renders.needUpdate;
    }

    render() {

        console.log( 'render WallsVoulumeTable');

        const {walls, addWall, volumeWallsResult, typeIndex, changeWallParam} = this.props;

        const wallsFields = walls.map((wall, index)=>{
            return <WallFieldsTr
                wallParams={wall}
                index={index}
                typeIndex={typeIndex}
                changeWallParam={changeWallParam}
                key={index} />
        });

        return (
            <React.Fragment>
                <table className="wallsVolume"><tbody>
                <WallsTheader />
                {wallsFields}
                <tr>
                    <td></td>
                    <td colSpan="2"><span className="addWallBtn" onClick={addWall} >Добавить стену</span></td>
                    <td colSpan="2" className="volumeWallsResult"><span>Итого: {volumeWallsResult} м<sup>3</sup></span></td>
                </tr>
                </tbody></table>
                <hr /><hr />
            </React.Fragment>
        )
    }

}

export default WallsVoulumeTable;