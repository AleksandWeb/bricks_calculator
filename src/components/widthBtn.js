import React, { Component } from 'react';
var classNames = require('classnames');

class WidthBtn extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        let needUpdate = false;
        nextProps.renders.forEach((val) => {
            (val === nextProps.wallTypeIndex) && (needUpdate = true);
        });
        return needUpdate;
    }

    handleClick() {
        return this.props.setActive(this.props.wallTypeIndex);
    }
    
    render() {
        console.log('render NavBtn');
        const { value, active, isResultbtn, showResultPage } = this.props;

        let btnClass = classNames(
            { 'active': active },
            { 'resltBtn': isResultbtn },
            { 'widthBtn': !isResultbtn },
        );
        let clickFunction = isResultbtn ? showResultPage : this.handleClick;

        return (
            <React.Fragment>
                    <span className={btnClass} onClick={clickFunction}>{value}</span>
            </React.Fragment>
        );
        
    }
}

export default WidthBtn;