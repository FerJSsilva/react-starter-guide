import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WelcomeProps extends Component {
    static propTypes = {
        name: PropTypes.string,
        id: PropTypes.number.isRequired,
    }

    static defaultProps = {
        name: "user"
    }

    render() {
        return (
            <div>
                <h1>Welcome {this.props.name} Number {this.props.id}</h1>
            </div>
        );
    }
}

export default WelcomeProps;