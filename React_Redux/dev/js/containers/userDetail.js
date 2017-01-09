/**
 * Created by aayush on 9/1/17.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{
    render(){
        if(!this.props.user){
            return (<h2>select a user</h2>);
        }else{
            return(
                <div>
                    <h2>{this.props.user.first}</h2>
                    <h2>{this.props.user.last}</h2>
                    <h2>{this.props.user.age}</h2>
                </div>
            );
        };
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeuser
    };
}

export default connect(mapStateToProps)(UserDetail);
