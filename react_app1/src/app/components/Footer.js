import React from 'react';


export default class Footer extends React.Component {
    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}