import React from 'react';
import PropTypes from 'prop-types';

const Stateless = (props) => {
  const {
    handleClick,
    isLoggedIn,
  } = props;

  return (
    <div>
      <button onClick={() => handleClick()}>
          Status: {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
};

Stateless.propTypes = {
  handleClick: PropTypes.func,
  isLoggedIn: PropTypes.bool.isRequired,
};

Stateless.defaultProps = {
  handleClick: () => {},
};

export default Stateless;
