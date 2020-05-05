import styled from 'styled-components';

export const Inputcontainer = styled.div`
    border: 1px solid #f2f4f7;
    border-color: rgba(10,46,101,.2);
    border-radius: 5px;
    padding: 15px;

    input{
        border: none;
        font-size: 14px;
        width: 100%;
        outline: transparent;
        color: #0a2e65;

        ::placeholder{
            color: #0a2e65;
            opacity: 0.6;
        }
    }
`