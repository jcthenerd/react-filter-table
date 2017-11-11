import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: props.title
        };
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
            </div>
        );
    }
}

App.propTypes = {
    reports: PropTypes.array.isRequired
};

export default App;