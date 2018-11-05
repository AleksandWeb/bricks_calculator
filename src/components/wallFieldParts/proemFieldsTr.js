import React, { Component } from 'react';
import { validVal, roundVal } from '../../functions/inputFunctions';

class ProemFieldsTr extends Component {

    constructor(props) {
        super(props);
        this.inputProemChange = this.inputProemChange.bind(this);
        this.setParams = this.setParams.bind(this);
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

    inputProemChange(event) {
        this.props.changeProemParam(this.setParams(event));
    }

    render() {

        const { proemParams, index } = this.props;

        return (
            <tr>
                <td>{index+1}</td>
                <td><input type="text" name="length" value={proemParams.length} index={index} onChange={this.inputProemChange} /></td>
                <td><input type="text" name="height" value={proemParams.height} index={index} onChange={this.inputProemChange} /></td>
                <td><input type="text" name="count" value={proemParams.count} index={index} onChange={this.inputProemChange} /></td>
                <td><input type="text" name="volumeResult" readOnly value={proemParams.volumeResult} onChange={()=>{}} /></td>
            </tr>
        )
    }

}

export default ProemFieldsTr;