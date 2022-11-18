import * as S from "./styles";
import { Eye } from "../../assets";
import { Eyeoff } from "../../assets";
import {useState} from "react";
import {AuthType} from "../../interface";

function Signup(): JSX.Element{


  return(
      <S.FlexWrapper>
        <S.Wrapper>
          <S.Signup>회원가입</S.Signup>
          <SignupInputs/>
          <S.GoBtn>Go</S.GoBtn>
        </S.Wrapper>
      </S.FlexWrapper>
  );
}; 

function SignupInputs():JSX.Element {
  const [isSecret, setIsSecret] = useState<boolean>(false);
  const [isCheckSecret, setIsCheckSecret] = useState<boolean>(false);
  const passwordType = isSecret ? "text" : "password";
  const checkPasswordType = isCheckSecret ? "text" : "password";

  const Text : AuthType[] = [
    {title : "Name", type:"text"},
    {title : "Password", type:passwordType},
    {title : "CheckPassword", type:checkPasswordType},
    {title : "School-Email", type:"text"},
    {title : "Student Grade", type:"text"}
  ];

  return(
    <>
      {Text.map((list)=>(
            <S.SignupInput 
            placeholder={list.title} 
            type={list.type}/>
          ))}
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
            />
            }
            {isCheckSecret ? 
            <img
              onClick={()=> setIsCheckSecret(!isCheckSecret)}
              src={Eye}
            />
            :
            <img 
              onClick={()=> setIsCheckSecret(!isCheckSecret)}
              src={Eyeoff}
            />
            }
          </S.Eyes>
          <S.selectbox>
            <S.option>Major</S.option>
            <S.option>Web</S.option>
            <S.option>App</S.option>
          </S.selectbox>
    </>
  );
};

export default Signup;