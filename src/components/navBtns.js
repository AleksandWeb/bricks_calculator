import React, { Component } from 'react';
import WidthBtn from "./widthBtn";

class NavBtns extends Component {

    shouldComponentUpdate(nextProps) {
        return nextProps.renders.needUpdate;
    }

    render() {

        console.log('render NavBtns');

        const { widthBtns, showResultPage, resultPage } = this.props;

        let btns = widthBtns.map((btn) =>{
            return <WidthBtn
                key={btn.wallTypeIndex}
                value={'Стены ' + btn.value}
                active={btn.active}
                setActive={btn.setActive}
                wallTypeIndex={btn.wallTypeIndex}
                isResultbtn={false}
                showResultPage={showResultPage}
                renders = { this.props.renders.WidthBtn }
            />
        });
        btns.push(<WidthBtn
                key={100}
                value={'Объём итого:'}
                showResultPage={showResultPage}
                active={resultPage}
                isResultbtn={true}
                wallTypeIndex={100}
                renders = { this.props.renders.WidthBtn }
            />);
        return (
            <div className="navBtns">
                <div className="widthBtns">
                    {btns}
                </div>{' '}
            </div>
        )
    }

}

export default NavBtns;


