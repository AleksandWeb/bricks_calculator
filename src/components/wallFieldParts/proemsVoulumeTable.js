import React, { Component } from 'react';
import ProemsTheader from "./proemsTheader";
import ProemFieldsTr from "./proemFieldsTr";

class ProemsVoulumeTable extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.renders.needUpdate;
    }

    render() {

        console.log( 'render WallsVoulumeTable');

        const {proems, addProem, volumeProemsResult, typeIndex, changeProemParam} = this.props;

        const proemsFields = proems.map((proem, index)=>{
            return <ProemFieldsTr
                proemParams={proem}
                index={index}
                typeIndex={typeIndex}
                changeProemParam={changeProemParam}
                key={index}/>
        });

        return (
            <React.Fragment>
                <table className="proemsVolume"><tbody>
                <ProemsTheader />
                {proemsFields}
                <tr>
                    <td></td>
                    <td colSpan="2"><span className="addWallBtn" onClick={addProem} >Добавить проем</span></td>
                    <td colSpan="2" className="volumeWallsResult"><span>Итого: {volumeProemsResult} м<sup>3</sup></span></td>
                </tr>
                </tbody></table>
                <hr /><hr />
            </React.Fragment>
        )
    }

}

export default ProemsVoulumeTable;