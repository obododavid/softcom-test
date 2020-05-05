import React, { useState } from 'react';
import { Inputcontainer } from './style';

const Input = ({ type, name, placeholder, value, handleOnChange, handleOnBlur }) => {
    const [focus, setFocus] = useState(false)
    return (
        <Inputcontainer focus={focus}>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onFocus={() => setFocus(true)}
                value={value}
                onChange={handleOnChange}
                onBlur={handleOnBlur} />
            <label>{placeholder}</label>
        </Inputcontainer>
    )
}

export default Input;
