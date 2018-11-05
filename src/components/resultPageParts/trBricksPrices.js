import React, {Component} from "react";
import {roundVal, validVal} from "../../functions/inputFunctions";

class TrBricksPrices extends  Component {

    constructor(props) {
        super(props);
        this.setParams = this.setParams.bind(this);
        this.priceChange = this.priceChange.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.renders.needUpdate;
    }

    /*----- Собирает в объект новое значение поля и его параметры ---*/

    setParams (event) {
        let input = event.currentTarget,
            val = input.value.replace(',', '.');

        if (!validVal(val)) {
            return false;
        }
        val = roundVal(val);
        return {
            value: val,
            name: input.getAttribute('name'),
        }
    }

    priceChange(event){
        this.props.priceChange(this.setParams(event));
    }

    render() {

        const {odinarniyPrice, polutorniyPrice} = this.props;

        return (
            <tr>
                <td className={'black'}><span className="fieldPrice">
                    <span className="label">Цена 1-го кирпича</span><br />
                    <input
                        type="text"
                        name="odinarniyPrice"
                        value={odinarniyPrice}
                        onChange={this.priceChange}
                    />
                </span></td>
                <td className={'black'}><span className="fieldPrice">
                    <span className="label">Цена 1-го кирпича</span><br />
                    <input
                        type="text"
                        name="polutorniyPrice"
                        value={polutorniyPrice}
                        onChange={this.priceChange}
                    />
                </span></td>
            </tr>
        );
    }

}

export default TrBricksPrices;