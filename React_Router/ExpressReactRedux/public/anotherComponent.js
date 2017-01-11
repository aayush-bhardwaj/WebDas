import React, {Proptypes} from "react"


class anotherComponent extends React.Component{
    constructor(props){
        super(props);
    }

    click() {
        this.props.testClick()
    }

    render(){
        return (
            <div>
                <h1> This is the another component</h1>
            </div>
        )
    }
}

export default anotherComponent;