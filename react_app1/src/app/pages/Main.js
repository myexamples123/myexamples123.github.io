import React from 'react';
import {Link} from 'react-router';


export default class Main extends React.Component {
    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <div className="jumbotron">
            <h1>Рады приветствовать Вас на нашем сайте!</h1>
                <Link className="btn btn-primary btn-lg" to="/about">Узнать больше</Link>
            </div>
        );
    }
}