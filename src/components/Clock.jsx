import React from 'react';
import PropTypes from 'prop-types'
class Clock extends React.Component {
  state = {
    date: new Date(),
  }

  updateClock = () => {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <button onClick={this.updateClock}>Update Clock</button>
      </div>
    );
  }
}

export default Clock;