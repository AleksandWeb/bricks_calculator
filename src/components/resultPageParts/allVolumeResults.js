import React, {Component} from "react";

class AllVolumeResults extends  Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.renders.needUpdate;
    }

    render() {

        const {wallSizes, resultVolume} = this.props;

        let wallVolums = wallSizes.map((value, index) => {
            return <tr key={index}>
                <td>{value.type}: </td>
                <td><input type="text" name="vw" value={value.volumeWallsResult} readOnly /> м<sup>3</sup></td>
                <td><input type="text" name="vp" value={value.volumeProemsResult} readOnly /> м<sup>3</sup></td>
                <td><input type="text" name="vk" value={value.volumeResult} readOnly /> м<sup>3</sup></td>
            </tr>
        });

        return (
            <table className="allVolumeResults">
                <tbody>
                <tr>
                    <th>Вид кладки</th>
                    <th>Объём стен</th>
                    <th>Объём проёмов</th>
                    <th>Объём кладки</th>
                </tr>
                {wallVolums}
                <tr>
                    <td className={'resultVolume'} colSpan={4}>Итого: {resultVolume} м<sup>3</sup></td>
                </tr>
                </tbody>
            </table>
        );
    }

}

export default AllVolumeResults;