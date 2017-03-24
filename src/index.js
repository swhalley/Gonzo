import React from 'react';
import { render } from 'react-dom';

const Root = () => {
    return (
        <h2>Hello World</h2>
    )
}

render( <Root />, document.querySelector( '#app' ));