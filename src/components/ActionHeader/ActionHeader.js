import React from 'react';
import Button from '../Button/Button';
import './ActionHeader.css'

const ActionHeader = ({ onSubmit, onClear }) => {
    return (
        <div className="action-header-container">
            <Button onButtonClick={onSubmit}>Submit</Button>
            <Button onButtonClick={onClear}>OnClear</Button>
        </div>
    )
}

export default ActionHeader;
