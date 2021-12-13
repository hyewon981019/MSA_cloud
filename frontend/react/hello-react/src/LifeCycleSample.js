import React, { Component } from 'react'


export default class LifeCycleSample extends Component {

    state = {
        number : 0,
        color : null,
    }


    myref = null;

    constructor(props)
    {
        super(props);
        console.log('constructor');
    }

    static getDerivedStateFromProps(nextProps, preState)
    {
        //마운트, 업데이트시작전 등 돔에 변화 있을때 호출
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== preState.color)
        {
            return {color : nextProps.color};
        }

        return null;
    }

    componentDidMount()
    {
        console.log('컴포넌트가 처음랜더링');
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        //리랜더링 할지말지 결정하는 메서드
        console.log('shouldComponentUpdate');
        return nextState.number % 10 !==4;
    }

    componentWillUnmount()
    { //사라지기 직전 호출됨
        console.log('componentWillUnmount');
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        //업데이트 전 상태를 저장?
        console.log('getSnapshot');;
        if(prevProps.color !== this.props.color){
            return this.myref.style.color;//변화가 생기면 
        }

        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        //업데이트 작업이 끝나고 호출
        console.log('componentDidUpdate');
        if(snapshot)
        {
            console.log('업데이트 되기 전 색상 : ', snapshot);

        }
    }

    handleClick = () =>
    {
        this.setState({
            number : this.state.number + 1,
        });
    };


    render() {

        console.log("render");

        const h1Style = {
            color : this.props.color,
        };

        return (
            <div>
                <h1 style={h1Style} ref = {(r)=> (this.myref = r)}>{this.state.number}</h1>
                <p>color : {this.state.color}</p>
                <button onClick = {this.handleClick}>더하기</button>
            </div>
        )
    }
}
