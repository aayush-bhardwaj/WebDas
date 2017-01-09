import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from "../actions/index";

class UserList extends Component {

    renderList() {
        return this.props.users.map((user) => {
            return (
                <li
                    onClick={() => this.props.selectUser(user)}
                    key={user.id}
                >
                    {user.first} {user.last}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function matchDispatchToProp(dispatch){
    return bindActionCreators({selectUser: selectUser} , dispatch)
}

export default connect(mapStateToProps, matchDispatchToProp)(UserList);
