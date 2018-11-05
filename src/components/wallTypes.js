import React, { Component } from 'react';
import TypeItem from "./typeItem";

class WallTypes extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.renders.needUpdate;
    }

    render() {
        console.log('render WallTypes');
        const { wallTypes, setWallType } = this.props;

        let wallTypeItems = wallTypes.map((thisType, index) => {
            return <TypeItem
                type={thisType}
                key={index}
                thisIndex={index}
                changeType={setWallType}
                renders={this.props.renders.TypeItem}/>;
        });

        return (
            <div className="wallTypes">
                <p>Какие виды кладок будут использоваться?</p>
                {wallTypeItems}
            </div>
        )
    }

}

export default WallTypes;