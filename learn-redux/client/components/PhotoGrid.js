import React from 'react';

class PhotoGrid extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Main';
    }
    render() {
        return (
            <div className="photo-grid">
                I'm this photo grid
            </div>
        );
    }
}

export default PhotoGrid;
