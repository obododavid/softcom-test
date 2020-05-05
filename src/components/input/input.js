import React, { useState } from 'react';
import { Inputcontainer } from './style';

const Input = ({ type, name, placeholder }) => {
    const [focus, setFocus] = useState(false)
    return (
        <Inputcontainer focus={focus}>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                onFocus={() => setFocus(true)} />
            <label>{placeholder}</label>
        </Inputcontainer>
    )
}

export default Input;
