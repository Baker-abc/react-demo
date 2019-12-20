import React from 'react';


class ConditionRender extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Welcome isLogging={true} />
                <Input />
            </div>
        );
    }
}

class Input extends React.Component {

    constructor() {
        super();
        this.state = { text: "" }
    }

    change = (event) => {
        this.setState(
            { text: event.target.value }
        );
    }

    render() {
        console.log(this.state.text === "");
        return (
            <div>
                <input onChange={this.change} value={this.state.text} />
                {
                    this.state.text &&
                    <h3>你输入的是： {this.state.text} </h3>
                }
            </div>
        );
    }
}

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = { login: this.props.isLogging }
    }

    change = () => {
        this.setState(
            { login: !this.state.login }
        );
    }

    render() {
        let h = null;
        if (this.state.login) {
            h = <LogIn />
        } else {
            h = <LogOut />
        }

        return (
            <div>
                {h}
                <button onClick={this.change}>change </button>
            </div>
        );
    }
}

const LogIn = () => {
    return <h1>Welcome!</h1>;
}
const LogOut = () => {
    return <h1>Please log in.</h1>;
}

export default ConditionRender;