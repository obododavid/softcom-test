import styled from 'styled-components';

export const Inputcontainer = styled.div`
    position: relative;

    .input-field{
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

        &:focus + .input-label{
            color: #0066f5;
        }

        &.error{
            border-color: #ff0000;
        }

        &.error + .input-label{
            color: #ff0000;
        }
    }

    .input-label{
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

    .error-message{
        margin-top: 5px;
        color: #ff0000;
        font-weight: 400;
        display: flex;
        align-items: center;

        span{
            background-color: #ff0000;
            color: #ffffff;
            border-radius: 50%;
            width: 12px;
            height: 12px;
            display: inline-block;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            margin-right: 5px;
        }
    }
`