import React, {Proptypes} from "react"


class MainComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default MainComponent;