import React, { Component } from 'react';
import { validVal, roundVal } from '../../functions/inputFunctions';

class WallFieldsTr extends Component {

    constructor(props) {
        super(props);
        this.inputWallChange    = this.inputWallChange.bind(this);
        this.setParams          = this.setParams.bind(this);
    }

    /*----- Собирает в объект новое значение поля и его параметры ---*/
    setParams (event) {

        let input   = event.currentTarget,
            val     = input.value.replace(',', '.');

        if(!validVal(val)) {
            return false;
        }
        val = roundVal(val);
        return {
            value: val,
            name: input.getAttribute('name'),
            index: input.getAttribute('index'),
            typeIndex: this.props.typeIndex
        }

    }

    inputWallChange(event) {
        this.props.changeWallParam(this.setParams(event));
    }

    render() {

        const {wallParams, index} = this.props;

        return (
            <tr>
                <td>{index+1}</td>
                <td><input type="text" name="length" value={wallParams.length} index={index} onChange={this.inputWallChange} /></td>
                <td><input type="text" name="height" value={wallParams.height} index={index} onChange={this.inputWallChange} /></td>
                <td><input type="text" name="count" value={wallParams.count} index={index} onChange={this.inputWallChange} /></td>
                <td><input type="text" name="volumeResult" readOnly value={wallParams.volumeResult} onChange={()=>{}} /></td>
            </tr>
        )
    }

}

export default WallFieldsTr;