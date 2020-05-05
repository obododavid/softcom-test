import React, { useState } from 'react';
import { FormContainer } from './style';
import Input from '../input/input';

const Form = () => {

    const [fullName, setFullName] = useState({
        value: '',
        hasError: false,
        errorMessage: ''
    })

    const [email, setEmail] = useState({
        value: '',
        hasError: false,
        errorMessage: ''
    })

    const [phone, setPhone] = useState({
        value: '',
        hasError: false,
        errorMessage: ''
    })

    const [password, setPassword] = useState({
        value: '',
        hasError: false,
        errorMessage: ''
    })

    const [confirmPassword, setConfirmPassword] = useState({
        value: '',
        hasError: false,
        errorMessage: ''
    })

    const [cardNumber, setCardNumber] = useState({
        value: '',
        hasError: false,
        errorMessage: ''
    })

    const [expiryDate, setExpiryDate] = useState({
        value: '',
        hasError: false,
        errorMessage: ''
    })

    const [pin, setPin] = useState({
        value: '',
        hasError: false,
        errorMessage: ''
    })

    const [err, setErr] = useState(true)

    const Input_fields = [
        {
            type: 'text',
            name: 'fullName',
            placeholder: 'Obodo David',
            state: fullName
        },
        {
            type: 'email',
            name: 'email',
            placeholder: 'obododavid@gmail.com',
            state: email
        },
        {
            type: 'tel',
            name: 'phone',
            placeholder: '080XXXXXXXX',
            state: phone
        },
        {
            type: 'password',
            name: 'password',
            placeholder: 'Password',
            state: password
        },
        {
            type: 'password',
            name: 'confirmPassword',
            placeholder: 'Confirm Password',
            state: confirmPassword
        },
        {
            type: 'text',
            name: 'cardNumber',
            placeholder: 'XXXX XXXX XXXX XXXX',
            state: cardNumber
        },
        {
            type: 'text',
            name: 'expiryDate',
            placeholder: 'mm/yy',
            state: expiryDate
        },
        {
            type: 'password',
            name: 'pin',
            placeholder: '****',
            state: pin
        },
    ]

    return (
        <FormContainer>
            {Input_fields.map(input => {
                const { name, type, placeholder, state } = input;
                return <Input
                    key={name}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                />
            })}
        </FormContainer>
    )
}

export default Form;
