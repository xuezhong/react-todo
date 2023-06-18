import React from 'react';

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
}

export default InputWithLabel;