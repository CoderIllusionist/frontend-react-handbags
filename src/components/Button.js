import React from 'react';

function Button( { disabled, text } ) {
    return (
        <button type="button" disabled={disabled}>{text}</button>
    )
};

export default Button