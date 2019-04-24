import React from 'react';
import {Link} from 'react-router';
import UserList from '../components/UserList';


export default class Users extends React.Component {
    constructor() {
        super(...arguments);
    }

    render() {
        return (<div>
            {
                !this.props.children ?
                    (
                        <UserList/>
                    ):
                    (this.props.children)
            }
        </div>);
    }
}