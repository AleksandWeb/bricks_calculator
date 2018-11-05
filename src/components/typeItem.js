import React, { Component } from 'react';

class TypeItem extends Component {

    constructor(props) {
        super(props);
        this.typeClick = this.typeClick.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        let needUpdate = false;
        nextProps.renders.forEach((val) => {
            (val === nextProps.thisIndex) && (needUpdate = true);
        });
        return needUpdate;
    }

    typeClick = () => {
        this.props.changeType(
                this.props.type.checked,
                this.props.thisIndex
        )
    }
    render() {

        console.log('render TypeItem index:', this.props.thisIndex);

        const { type } = this.props;

        let itemClass = (type.checked) ? "typeItem checked" : "typeItem";
        
        return (
           <React.Fragment>
            <div className={itemClass} onClick={this.typeClick}>
                <p><img src={type.img} alt={type.type} /></p>
                <p><span className="nameItem">{type.type}</span></p>
                <p><span className="wallWidth">({type.width} мм)</span></p>
                <p><span className="checkbox"></span></p>
            </div>{' '}
            </React.Fragment>
        )
    }

}

export default TypeItem;


