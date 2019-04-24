import React from 'react';
import { Link } from 'react-router';

export default class User extends React.Component {
    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3><Link to={"/users/" + this.props.id}>{this.props.username}</Link></h3>
                </div>
                <div className="panel-body">
                    <p>
                        {this.props.name}
                    </p>
                    <p>
                        {this.props.email}
                    </p>
                    <p>
                        {this.props.phone}
                    </p>
                    <p>
                        {this.props.website}
                    </p>
                </div>
            </div>
        );
    }
}