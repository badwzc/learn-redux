import React from 'react';

class Single extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Main';
    }
    render() {
        return (
            <div className="single-photo">
                I'm this single
            </div>
        );
    }
}

export default Single;
