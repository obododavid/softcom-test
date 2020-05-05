import styled from 'styled-components';

export const Inputcontainer = styled.div`
    position: relative;

    input{
        border: 1px solid #f2f4f7;
        border-color: rgba(10,46,101,.2);
        border-radius: 5px;
        padding: 15px;
        font-size: 14px;
        width: 100%;
        outline: transparent;
        transition: 0.5s ease-in-out;
        transition-property: color;
        color: #0a2e65;

        ::placeholder{
            color: #0a2e65;
            opacity: 0.6;
        }

        &:focus{
            border-color: #0066f5;
        }

        &:focus + label{
            color: #0066f5;
        }
    }

    label{
        position: absolute;
        top: -19px;
        left: 12px;
        font-size: 12px;
        padding: 5px 5px 0 5px;
        background-color: #ffffff;
        color: rgba(10, 46, 101, 0.5);
        opacity: 0;
        transition:0.5s ease-in-out;
        transition-property: top, opacity;

        ${({ focus }) => focus && 'top: -12px; opacity: 1'};
    }
`