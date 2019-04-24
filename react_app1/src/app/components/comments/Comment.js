import React from 'react';
import { Link } from 'react-router';

export default class Comment extends React.Component {
    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {this.props.title}{/* |
                        <Link to={`/users/${this.props.userId}`}>Ссылка на автора</Link>*/}
                    </h3>
                </div>
                <div className="panel-body">
                    {this.props.body}
                </div>
            </div>
        );
    }
}