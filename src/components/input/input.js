import React from 'react';
import { Inputcontainer } from './style';

const Input = ({ type, name, placeholder }) => {
    return (
        <Inputcontainer>
            <input type={type} name={name} placeholder={placeholder} />
        </Inputcontainer>
    )
}

export default Input;
