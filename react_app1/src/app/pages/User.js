import React from 'react';
import axios from 'axios';
import UserProfile from '../components/User';
//TODO componente/User

export default class User extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            user: null
        };
    }

    componentDidMount()
    {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
            .then((response) => {
            let  { data } = response;

            this.setState({
                user: data
            });
            });
    }


    render()
    {
        let content = <div>Ожидайте завершения загрузки данных!</div>;
        if(this.state.user){
            content = <UserProfile {...this.state.user} />;
        }
        return (
            <div>
                {content}
            </div>
        );
    }
}