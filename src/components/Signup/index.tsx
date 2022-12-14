import * as S from "./styles";
import { Eye } from "../../assets";
import { Eyeoff } from "../../assets";
import { useState } from "react";
import { AuthType } from "../../interface";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Major } from "../My/styles";

const BASE_URL = "http://10.156.147.118:8080";

function Signup(): JSX.Element {
  return (
    <S.FlexWrapper>
      <S.Wrapper>
        <S.Signup>회원가입</S.Signup>
        <SignupInputs />
      </S.Wrapper>
    </S.FlexWrapper>
  );
}

function SignupInputs(): JSX.Element {
  const [isSecret, setIsSecret] = useState<boolean>(false);
  const [isCheckSecret, setIsCheckSecret] = useState<boolean>(false);
  const passwordType = isSecret ? "text" : "password";
  const checkPasswordType = isCheckSecret ? "text" : "password";
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
    checkPassword: "",
    email: "",
    grade: "",
  });
  const { name, password, checkPassword, email, grade } = inputs;
  const [major, setMajor] = useState<string>("");

  const Text: AuthType[] = [
    { title: "Name", type: "text", name: "name" },
    { title: "Password", type: passwordType, name: "password" },
    { title: "CheckPassword", type: checkPasswordType, name: "checkPassword" },
    { title: "School-Email", type: "text", name: "email" },
    { title: "Student-Grade", type: "text", name: "grade" },
  ];

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const signup = async () => {
    await axios.post(`${BASE_URL}/user/signup`, {
      name: name,
      password: password,
      grade: grade,
      email: email,
      majorType: major,
    });
  };

  const onSignup = async () => {
    console.log(major);
    if (password === checkPassword) {
      try {
        await signup();
      } catch (error: any) {
        console.log(error);
        // if (error.response.data.status === 400) alert("존재하는 아이디입니다.");
      }
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <>
      {Text.map((list) => (
        <S.SignupInput
          placeholder={list.title}
          type={list.type}
          name={list.name}
          onChange={onChange}
        />
      ))}
      <S.Eyes>
        {isSecret ? (
          <img onClick={() => setIsSecret(!isSecret)} src={Eye} />
        ) : (
          <img onClick={() => setIsSecret(!isSecret)} src={Eyeoff} />
        )}
        {isCheckSecret ? (
          <img onClick={() => setIsCheckSecret(!isCheckSecret)} src={Eye} />
        ) : (
          <img onClick={() => setIsCheckSecret(!isCheckSecret)} src={Eyeoff} />
        )}
      </S.Eyes>
      <S.selectbox onChange={(e: any) => setMajor(e.target.value)}>
        <S.option>Web</S.option>
        <S.option>App</S.option>
        <S.option>Game</S.option>
        <S.option>etc</S.option>
      </S.selectbox>
      <S.GoBtn onClick={onSignup}>Go</S.GoBtn>
    </>
  );
}

export default Signup;
