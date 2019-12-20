import React from 'react'

class LifeCycleTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = { age: "1", date: new Date() };
    }

    componentWillMount() {
        console.log("1 准备render：compenontWillMount");
    }

    componentDidMount() {
        console.log("2 结束render：compenontDidMount");

        this.clock = setInterval(() => this.tick(), 1000);
    }

    componentWillReceiveProps() {
        console.log("3 准备重新收到props render：componentWillReceiveProps");
        this.setState({ age: this.props.name + "2" });
    }

    //不能修改 state
    componentWillUpdate() {
        console.log("4 收到新的props/state准备渲染 render：componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("5 新的props/state渲染完毕 render：componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("6 销毁");
        clearInterval(this.clock);
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        console.log(" ---------- render ---------");
        return (
            <div id="lifeCycle">
                <h2> time： {this.state.date.toLocaleTimeString()} </h2>
                <h2> hehe： {this.props.name} </h2>
                <h2> hehe： {this.state.age} </h2>
                <button onClick={this.props.handleClickForLifeCycleTest}>click me update props!</button>
                <button onClick={this.props.destroyComponent}>destroy this page!</button>
            </div>
        );
    }
}

export default LifeCycleTest;