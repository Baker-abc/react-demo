import React from 'react';

class Parent2 extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.changeState = this.changeState.bind(this);
    }
    //改变 state 的方法，将这个方法分别传递给三个子组件，使子组件可以在自身内部调用该方法，以达到改变父组件内部的 state，继而改变父组件传给子组件的 props，继而达到更新子组件的目的 
    changeState() {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }
    //将 changeState 方法和 state.count 作为 props 传给子组件
    render() {
        return (
            <div>
                <RedChild fn={this.changeState} count={this.state.count} />
                <GreenChild fn={this.changeState} count={this.state.count} />
                <BlueChild fn={this.changeState} count={this.state.count} />
            </div>
        );
    }
}
//以下是三个子组件，为了说明问题，我们不考虑代码复用的问题，子组件都是无状态组件，只接收父组件的 props 来更新自身。
class RedChild extends React.Component {
    constructor(props) {
        super(props);
    }
    //调用父组件的 changeState 方法，改变父组件的状态，获得新的 props，更新自身，其他两个子组件类似。
    render() {
        return <button onClick={this.props.fn} style={{ backgroundColor: 'red' }}>{this.props.count} times</button>
    }
}
class GreenChild extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <button onClick={this.props.fn} style={{ backgroundColor: 'green' }}>{this.props.count} times</button>
    }
}
class BlueChild extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <button onClick={this.props.fn} style={{ backgroundColor: 'blue' }}>{this.props.count} times</button>
    }
}

export default Parent2;