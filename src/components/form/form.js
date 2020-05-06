import React, { useState } from 'react';
import { FormContainer } from './style';
import Input from '../input/input';
import Button from '../button/button';
import { handleCheckEmailValidity, handleCheckPasswordValidity } from '../../utils';

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

    const handleOnChange = (e) => {
        const { name, value } = e.target;

        if (name === 'fullName') {
            setFullName({ ...fullName, value })
        }

        if (name === 'email') {
            setEmail({ ...email, value })
        }

        if (name === 'phone') {
            const _value = value.match(/\d/g) || [];
            const joinNumbers = _value.join("")
            if (value.length <= 11) {
                setPhone({ ...phone, value: joinNumbers })
            }
        }

        if (name === 'password') {
            setPassword({ ...password, value })
        }

        if (name === 'confirmPassword') {
            setConfirmPassword({ ...confirmPassword, value })
        }

        if (name === 'cardNumber') {
            const _value = value.match(/(\d{1,4})/g) || [];
            const formattedValue = _value.join(" ");
            if (value.length <= 19) {
                setCardNumber({ ...cardNumber, value: formattedValue });
            }
        }

        if (name === 'expiryDate') {
            const _value = value.match(/(\d{1,2})/g) || [];
            const formattedValue = _value.join("/");
            if (value.length <= 5) {
                setExpiryDate({ ...expiryDate, value: formattedValue });
            }
        }

        if (name === 'pin') {
            const _value = value.match(/\d/g) || [];
            const formattedValue = _value.join("");
            if (value.length <= 4) {
                setPin({ ...pin, value: formattedValue });
            }
        }
    }

    const validateFullName = (value) => {
        const wordCount = value.split(' ').filter(word => word !== '').length;

        if (value.length < 2) {
            setFullName({ ...fullName, hasError: true, errorMessage: 'Name must not be less than two characters' })
        } else if (wordCount < 2 && value.length >= 2) {
            setFullName({ ...fullName, hasError: true, errorMessage: 'Name must include a space and then second name' })
        } else {
            setFullName({ ...fullName, hasError: false, errorMessage: '' })
        }
    }

    const validateEmail = (value) => {
        var isValid = handleCheckEmailValidity(value)
        if (!isValid) {
            setEmail({ ...email, hasError: true, errorMessage: 'Please enter a valid email' })
        } else {
            setEmail({ ...email, hasError: false, errorMessage: '' })
        }
    }

    const validatePhoneNumber = (value) => {
        if (value.length !== 11) {
            setPhone({ ...phone, hasError: true, errorMessage: 'Phone number must be 11 characters' })
        } else if (value[0] !== '0') {
            setPhone({ ...phone, hasError: true, errorMessage: 'Nigerian Phone number must begin with a zero' })
        } else {
            setPhone({ ...phone, hasError: false, errorMessage: '' })
        }
    }

    const validatePassword = (value) => {
        var isValid = handleCheckPasswordValidity(value)
        if (!isValid || value.length < 6) {
            setPassword({ ...password, hasError: true, errorMessage: 'Password must contain at least one uppercase character, one number, special character and not shorter than six characters' })
        } else {
            setPassword({ ...password, hasError: false, errorMessage: '' })
        }
    }

    const validateConfirmPassword = (value) => {
        if (value !== password.value) {
            setConfirmPassword({ ...confirmPassword, hasError: true, errorMessage: 'Must match password field' })
        } else {
            setConfirmPassword({ ...confirmPassword, hasError: false, errorMessage: '' })
        }
    }

    const validateCardNumber = (value) => {
        if (value.length !== 19) {
            setCardNumber({ ...cardNumber, hasError: true, errorMessage: "Card Number must be 16 digits" });
        } else {
            setCardNumber({ ...cardNumber, hasError: false, errorMessage: "" });
        }
    }

    const validateExpiryDate = (value) => {
        const day = value.slice(0, 2);
        1
        if (value.length !== 5) {
            setExpiryDate({ ...expiryDate, hasError: true, errorMessage: "enter complete date" });
        } else if (day < '1' || day > '31') {
            setExpiryDate({ ...expiryDate, hasError: true, errorMessage: "enter a valid day" });
        } else {
            setExpiryDate({ ...expiryDate, hasError: false, errorMessage: "" });
        }
    }

    const validatePin = (value) => {
        if (value.length !== 4) {
            setPin({ ...pin, hasError: true, errorMessage: "card pin must be 4 digits" });
        } else {
            setPin({ ...pin, hasError: false, errorMessage: "" });
        }
    }

    const handleValidateInput = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "fullName":
                validateFullName(value)
                break;
            case "email":
                validateEmail(value)
                break;
            case "phone":
                validatePhoneNumber(value)
                break;
            case "password":
                validatePassword(value)
                break;
            case "confirmPassword":
                validateConfirmPassword(value)
                break;
            case "cardNumber":
                validateCardNumber(value)
                break;
            case "expiryDate":
                validateExpiryDate(value)
                break;
            case "pin":
                validatePin(value)
                break;
        }
    }

    const handleOnSubmit = e => {

    }

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
                    value={state.value}
                    handleOnChange={handleOnChange}
                    handleOnBlur={handleValidateInput}
                    hasError={state.hasError}
                    errorMessage={state.errorMessage}
                />
            })}
            <Button disabled={true} handleOnClick={handleOnSubmit}>Submit</Button>
        </FormContainer>
    )
}

export default Form;
