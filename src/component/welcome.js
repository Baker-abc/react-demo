import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Parent from './parent';
import ComponentWillMountTest from './componentWillMountTest';
import Parent2 from './statePropsTest';
import LifeCycleTest from './lifeCycleTest';


class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: new Date().toString(), name2: "bk" };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickForLifeCycleTest = this.handleClickForLifeCycleTest.bind(this);
        this.destroyComponent = this.destroyComponent.bind(this);
    }

    handleClick() {
        this.setState({ user: new Date().toString() });
    }
    handleClickForLifeCycleTest() {
        this.setState({ name2: new Date().toString() });
        // this.setState({ name2: "bk" });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return nextState.name2 !== "bk";
    }

    //销毁节点上的组件
    destroyComponent() {
        ReactDOM.unmountComponentAtNode(document.getElementById("root"));
    }

    render() {
        return (
            <div>
                <h1>Hello,{this.props.name}</h1>
                <h1>Hello,{this.state.user}</h1>
                <h2>Have a nice time!</h2>
                <button onClick={this.handleClick}>click me!</button>
                <Parent />
                <h2 style={{ color: 'blue' }}>3、setState、ansy</h2>
                <ComponentWillMountTest />
                <h2 style={{ color: 'blue' }}>4、state、props</h2>
                <Parent2 />
                <h2 style={{ color: 'blue' }}>5、生命周期</h2>
                <LifeCycleTest name={this.state.name2} handleClickForLifeCycleTest={this.handleClickForLifeCycleTest} destroyComponent={this.destroyComponent} />
            </div>
        );
    }
}

//propTypes 一般用来作类型检查
Welcome.propTypes = {
    name: PropTypes.string
};
//defaultProps 用来设置 props 的默认值
Welcome.defaultProps = {
    name: 'shiyanlou'
}
export default Welcome;