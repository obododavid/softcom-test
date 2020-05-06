import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    handleOnBlur: PropTypes.func,
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string
}

Input.defaultProps = {
    value: '',
    type: 'text'
}

export default Input;
