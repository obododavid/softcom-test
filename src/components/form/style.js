import styled from 'styled-components';
import { devices } from '../../styling/devices';

export const FormContainer = styled.form`
    background-color: #fff;
    border: 1px solid #cde7f7;
    border-radius: 5px;
    width: 500px;
    padding: 40px 30px 30px;

    @media ${devices.mobile}{
        width: 80%;
    }

    > div{
        margin-bottom: 30px;
    }

`