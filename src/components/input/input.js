import React, { useState } from 'react';
import { Inputcontainer } from './style';

const Input = ({ type, name, placeholder, value, handleOnChange, handleOnBlur, hasError, errorMessage }) => {
    const [focus, setFocus] = useState(false)
    return (
        <Inputcontainer focus={focus}>
            <input
                className={hasError ? 'input-field error' : 'input-field'}
                type={type}
                name={name}
                placeholder={placeholder}
                onFocus={() => setFocus(true)}
                value={value}
                onChange={handleOnChange}
                onBlur={handleOnBlur} />
            <label className='input-label'>{placeholder}</label>
            {hasError && <h6 className='error-message'><span>!</span>{errorMessage}</h6>}
        </Inputcontainer>
    )
}

export default Input;
