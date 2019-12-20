import React from 'react';

class Child extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("Child Component render()")
        return <h1>Hello {this.props.name}</h1>;
    }
}

class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'World'
        }
        this.changeState = this.changeState.bind(this);
    }
    changeState() {
        this.setState({
            name: 'new state'
        });
    }
    render() {
        console.log("Parent Component render()");
        return (
            <div>
                <Child name={this.state.name} />
                <button onClick={this.changeState}>change state</button>
            </div>
        );
    }
}

export default Parent;