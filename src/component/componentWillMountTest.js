import React from 'react';


class ComponentWillMountTest extends React.Component {
    constructor() {
        super();
        this.state = { value: 1 };
    }

    componentWillMount() {
        console.log("componentWillMount：render  prepare");

        this.setState({ value: 2 }, () => {
            console.log(22);
            console.log(this.state.value);
        });
        console.log(11);
        console.log(this.state.value);
    }

    componentDidMount() {
        console.log("componentDidMount：render end");
    }

    render() {
        return (
            <div>
                <h1>ComponentWillMountTest</h1>
                <h1>Hello,{this.state.value}</h1>
            </div>
        );
    }
}


export default ComponentWillMountTest;