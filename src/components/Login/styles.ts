import styled from 'styled-components';
import { MainColor } from '../../styles';

export const FlexWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Wrapper = styled.div`
    margin-top: 110px;
    width: 500px;
    height: 400px;
    box-shadow: 0 4px 4px #67A2E7;
    display:flex;
    flex-direction: column;
    align-items: center;
`;

export const Signup = styled.p`
    font-size: 40px;
    margin: 20px 0 60px 0;
    color: ${MainColor};
    font-family: 'NotoSans-SemiBold';
    font-weight: bold;
`;

export const LoginInput = styled.input`
    ::placeholder{
        color: #C9D6EB;
    }
    margin-bottom: 30px;
    width: 350px;
    height: 40px;
    outline: none;
    border: none;
    border-bottom: 2px solid #67A2E7;
    font-size: 20px;
    padding-left: 10px;
    box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.8);
    color: ${MainColor};
`;
export const GoBtn = styled.button`
    width: 200px;
    height: 50px;
    color: white;
    background-color: #C9D6EB;
    border: none;
    font-size: 20px;
    margin-top: 40px;
    :hover{
        background-color: ${MainColor};
    }
`;
export const Eyes = styled.div`
    position: absolute;
    top: 450px;
    right: 800px;
`;