import React, { Component } from 'react';

class ResultVolumeTable extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.renders.needUpdate;
    }

    render() {

        console.log( 'render ResultVolumeTable');

        const {volumeWallsResult, volumeProemsResult, volumeResult} = this.props;

        return (
            <table className="difference">
                <tbody>
                <tr>
                    <th>Объем стен м<sup>3</sup></th>
                    <th></th>
                    <th>Объем проёмов м<sup>3</sup></th>
                    <th></th>
                    <th>Результат м<sup>3</sup></th>
                </tr>
                <tr>
                    <td><input type="text" name="volumeResult" readOnly value={volumeWallsResult} onChange={()=>{}} /></td>
                    <td> &mdash; </td>
                    <td><input type="text" name="volumeResult" readOnly value={volumeProemsResult} onChange={()=>{}} /></td>
                    <td> = </td>
                    <td>
                        <span className="volumeWallsResult">
                        <input type="text" name="volumeResult" readOnly value={volumeResult} onChange={()=>{}} />
                        </span>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }

}

export default ResultVolumeTable;