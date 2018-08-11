import React, { Component } from 'react';

const element = React.createElement(
    'h1', // tag
    {className: 'greeting'}, // attributes
    'JSX Sample!' // children
  );

class JsxSample extends Component {
    render() {
        return (
            /* JSX produces react elements */
            <div>
                <h1 className="greeting">!JSX Sample</h1>
                {element}
            </div>
        );
    }
}

export default JsxSample;