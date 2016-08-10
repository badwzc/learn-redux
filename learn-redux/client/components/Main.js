import React from 'react';
import {Link} from 'react-router';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Main';
    }
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                       {this.props.children}

                </h1>
            </div>
        );
    }
}

export default Main;
