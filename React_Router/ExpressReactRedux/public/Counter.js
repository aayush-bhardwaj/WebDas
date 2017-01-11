import React, {Proptypes} from "react"
import {connect} from "react-redux"
import {CounterAction} from "./actions"

class App extends React.Component{
    constructor(props){
        super(props);
    }

    click() {
        this.props.testClick()
    }

    render(){
        return (
            <div>
                <h1></h1>
                <h2> Counter : {this.props.global.counter}</h2>
                <button onClick={this.click.bind(this)}>Click Me</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        testClick: () => dispatch(CounterAction("Add"))
    }
}

const mapStateToProps = (state) => {
    return state;
}

const DefaultApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default DefaultApp;