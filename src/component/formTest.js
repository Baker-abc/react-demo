import React from 'react';
import { Button } from 'antd';

class FormTest extends React.Component {

    constructor() {
        super();
        this.state = {text: ""};
    }

    change = (e) => {
        this.setState({text: e.target.value})
    };

    submit = (e) => {
        alert(this.state.text);
        e.preventDefault();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <label>
                        value: <input type="text" onChange={this.change} value={this.state.text}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <SelectTest/>
                <Button type="primary">Button</Button>
            </div>

        );
    }
}

class SelectTest extends React.Component {

    constructor() {
        super();
        this.state = {value: "Node"}
    }

    change = (e) => {
        this.setState({value: e.target.value});
    };

    submit = (e) => {
        alert(this.state.value);
        e.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>
                    选择：
                    <select value={this.state.value} onChange={this.change}>
                        <option value="Java">java</option>
                        <option value="Python">python</option>
                        <option value="Node">node</option>
                    </select>
                </label>
                <input type="submit" value="修改"/>
            </form>
        );
    }
}


export default FormTest;
