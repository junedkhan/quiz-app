import React from 'react';
import './Button.css'

const Button = ({ children, onButtonClick }) => {
    return (
        <button className="button" onClick={onButtonClick}>{children}</button>
    )
}

export default React.memo(Button);
