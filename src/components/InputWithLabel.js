import React from 'react';
import PropTypes from 'prop-types';

function InputWithLabel({todoTitle, handleTitleChange, children}) {
    const inputRef = React.useRef(null);
    React.useEffect(()=>{
        inputRef.current.focus();
    });
    return (
        <>
        <label htmlFor='todoTitle'>{children}</label>
        <input id="todoTitle" name='title' value={todoTitle} onChange={handleTitleChange} ref={inputRef}></input>
        </>
    )
};

InputWithLabel.propTypes = {
    todoTitle:PropTypes.string.isRequired,
    handleTitleChange:PropTypes.func,
    children:PropTypes.node
};
export default InputWithLabel;