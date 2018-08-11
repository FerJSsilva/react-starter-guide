import React, { Component } from 'react';
import LoginLogout from './Stateless';


class Statefull extends Component {

    state = {
      isLoggedIn: true,
    }
  
    changeStatus = () => {
      this.setState({
        isLoggedIn: !this.state.isLoggedIn,
      });
    }
  
    render() {
      return (
        <div>
          <h4>Statefull Component</h4>
          <p>
            Are you logged in?
            <br />
            <b>{String(this.state.isLoggedIn)}</b>
          </p>
          <br />
  
          <p>
            Stateless Component:
          </p>
  
          <LoginLogout
            handleClick={this.changeStatus}
            isLoggedIn={this.state.isLoggedIn}
          />
        </div>
      );
    }
  }
  
  
  
  export default Statefull;