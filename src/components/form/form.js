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
            placeholder: 'Full Name',
            state: fullName
        },
        {
            type: 'email',
            name: 'email',
            placeholder: 'Email',
            state: email
        },
        {
            type: 'tel',
            name: 'phone',
            placeholder: 'Phone number',
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
            placeholder: 'Credit/Debit Card Number',
            state: cardNumber
        },
        {
            type: 'text',
            name: 'expiryDate',
            placeholder: 'Expiration date',
            state: expiryDate
        },
        {
            type: 'password',
            name: 'pin',
            placeholder: 'PIN',
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
