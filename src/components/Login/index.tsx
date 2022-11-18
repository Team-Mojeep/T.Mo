import * as S from "./styles";
import {useState} from "react";
import { Eye } from "../../assets";
import { Eyeoff } from "../../assets";
import {AuthType} from "../../interface";

function Login(): JSX.Element{
    const [isSecret, setIsSecret] = useState<boolean>(false);
    const passwordType = isSecret ? "text" : "password";

    const Text : AuthType[] = [
        {title : "ID", type:"text"},
        {title : "Password", type:passwordType}
    ];
    return(
        <S.FlexWrapper>
            <S.Wrapper>
                <S.Signup>로그인</S.Signup>
                {
                    Text.map((list)=>(
                        <S.LoginInput 
                        placeholder={list.title} 
                        type={list.type}/>
                    ))}
                <S.GoBtn>Go</S.GoBtn>
                <S.Eyes>
                    {isSecret ? 
                    <img
                    onClick={()=> setIsSecret(!isSecret)}
                    src={Eye}
                    />
                    :
                    <img
                    onClick={()=> setIsSecret(!isSecret)}
                    src={Eyeoff}
                    />}
                </S.Eyes>
            </S.Wrapper>
        </S.FlexWrapper>
    );
};

export default Login;