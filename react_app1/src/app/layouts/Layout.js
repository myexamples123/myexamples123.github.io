import React from 'react';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import Footer from '../components/Footer';
import {Link} from 'react-router';

export default class Layout extends React.Component {
    constructor() {
        super(...arguments);

        this.brand = 'My application';
    }

    isActive(href) {
        return window.location.pathname == href;
    }

    render() {
        return (
            <div>
                <Menu brand={this.brand}>
                    <MenuItem href="/" active={this.isActive('/')}>
                        Главная
                    </MenuItem>
                    <MenuItem href="/comments" active={this.isActive('/comments')}>
                        Комментарии
                    </MenuItem>
                    <MenuItem href="/users" active={this.isActive('/users')}>
                        Пользователи
                    </MenuItem>
                </Menu>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            { this.props.children }
                        </div>
                    </div>
                    <Footer>
                        &copy; 2018
                    </Footer>
                </div>
            </div>
        );
    }
}