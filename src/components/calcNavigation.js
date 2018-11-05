import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

class CalcNavigation extends Component {
    render() {
        return (
            <div id={'calcNavigation'}>
                <NavLink exact to="/" activeClassName="active" >Калькулятор</NavLink>
                <NavLink exact to="/description" activeClassName="active">Описание</NavLink>
            </div>
        );
    }
}

export default CalcNavigation;
