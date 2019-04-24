import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import User from './User';


export default class UserList extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {
            users: []
        };

        axios
            .get('https://jsonplaceholder.typicode.com/users/')
            //.get('http://localhost:8082/api/users/')
            .then((responce) => {
            let { data } = responce;

            this.setState({
                users: data
            });
            });
    }

    render() {
        if(!this.state.users.length)
            return null;

        let users = this.state.users.map((user, index) => {
            return <User key={index} {...user} />
        });

        return (
            <div>
                <p>Пользователи!</p>
                {users}
            </div>
        );
    }
}