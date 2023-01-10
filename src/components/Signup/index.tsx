import * as S from "./styles";
import { Eye } from "../../assets";
import { Eyeoff } from "../../assets";
import { useState } from "react";
import { AuthType } from "../../interface";
import axios from "axios";

const BASE_URL = "http://192.168.167.105:8080";

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

  // const signup = async () => {
  //   axios({
  //     method: "post",
  //     url: `${BASE_URL}/user/login`,
  //     data: {
  //       name: name,
  //       password: password,
  //       grade: grade,
  //       email: email,
  //       majorType: major,
  //     },
  //   })
  //     .then(function (response) {
  //       console.log("성공");
  //     })
  //     .catch(function (error) {
  //       if (error.response.status === 400) {
  //         console.log(error.response.status);
  //       } else alert(`오류 (${error.response.status})`);
  //     });
  // };

  const onSignup = async () => {
    console.log(name);
    console.log(password);
    console.log(grade);
    console.log(email);
    console.log(major);
    if (password === checkPassword) {
      axios({
        method: "post",
        url: `${BASE_URL}/user/signup`,
        data: {
          name: name,
          password: password,
          grade: grade,
          email: email,
          majorType: major,
        },
      })
        .then(function (response) {
          console.log("성공");
        })
        .catch(function (error) {
          if (error.response.status === 400) {
            console.log(error.response);
          } else console.log(error.response);
        });
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
      <S.Mail>@dsm.hs.kr</S.Mail>
      <S.selectbox onChange={(e: any) => setMajor(e.target.value)}>
        <S.option value="WEB">Web</S.option>
        <S.option value="APP">App</S.option>
        <S.option value="GAME">Game</S.option>
        <S.option value="ECT">etc</S.option>
      </S.selectbox>
      <S.GoBtn onClick={onSignup}>Go</S.GoBtn>
          
    </>
  );
}

export default Signup;
