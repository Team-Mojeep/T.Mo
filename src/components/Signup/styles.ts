import styled from 'styled-components';
import { MainColor } from '../../styles';

export const FlexWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Wrapper = styled.div`
    margin-top: 50px;
    width: 500px;
    height: 700px;
    box-shadow: 0 4px 4px ${MainColor};
    display:flex;
    flex-direction: column;
    align-items: center;
`;

export const Signup = styled.p`
    font-size: 40px;
    margin: 20px 0 40px 0;
    color: ${MainColor};
    font-family: 'NotoSans-SemiBold';
    font-weight: bold;
`;

export const SignupInput = styled.input`
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

export const selectbox = styled.select`
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
    color: #C9D6EB;
`;

export const option = styled.option`
    
`;

export const Eyes = styled.div`
    position: absolute;
    top: 370px;
    right: 800px;
    display: flex;
    flex-direction: column;
    gap: 54px;
`;

export const Mail = styled.div`
    position: absolute;
    font-size: 20px;
    font-weight: bold;
    color: ${MainColor};
    right: 790px;
    top: 520px;
`;