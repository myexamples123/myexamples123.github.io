import React from 'react';
import {Link} from 'react-router';

export default class MenuItem extends React.Component {
    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <li className={this.props.active ? 'active' : ''}>
                <Link to={this.props.href}>
                    {this.props.children}
                </Link>
            </li>
        );
    }

}