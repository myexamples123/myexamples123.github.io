import React from 'react';
import {Link} from 'react-router';

export default class About extends React.Component {
    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading"><h3>Panel title</h3></div>
                <div className="panel-body">
                    Content
                    <Link to="/redirect">Переадресация</Link>
                </div>
            </div>
        );
    }
}