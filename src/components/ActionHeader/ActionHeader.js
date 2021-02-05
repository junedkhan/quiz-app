import React from 'react';
import Button from '../Button/Button';
import './ActionHeader.css'

const ActionHeader = ({ onSubmit, onClear }) => {
    return (
        <div className="action-header-container">
            <Button onButtonClick={onSubmit}>Submit</Button>
            <Button onButtonClick={onClear}>Clear</Button>
        </div>
    )
}

// using memo to memoize some simple component
export default React.memo(ActionHeader);
