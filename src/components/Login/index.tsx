import * as S from "./styles";
import { useState } from "react";
import { Eye } from "../../assets";
import { Eyeoff } from "../../assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";
interface AuthType {
    title: string;
    type: string;
    name: string;
    max?: number;
  }

const BASE_URL = "http://192.168.167.105:8080";

function Login(): JSX.Element {
  const [isSecret, setIsSecret] = useState<boolean>(false);
  const passwordType = isSecret ? "text" : "password";
  const naigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

    const Text : AuthType[] = [
        {title : "E-mail", type:"text", name: "email"},
        {title : "Password", type: "passwordType", max:16, name: "password"},
    ];

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onLogin = () => {
    console.log(email, password);
    axios({
      method: "post",
      url: `${BASE_URL}/user/login`,
      data: {
        email: email,
        password: password,
      },
    })
      .then(function (response) {
        console.log("성공");
        console.log(response.data.accessToken);
      })
      .then((res:any) => {
        localStorage.setItem("t_mo_access_token", res.data.accessToken);
      });
  };

  return (
    <S.FlexWrapper>
      <S.Wrapper>
        <S.Signup>로그인</S.Signup>
        {Text.map((list) => (
          <S.LoginInput
            placeholder={list.title}
            type={list.type}
            name={list.name}
            onChange={onChange}
            maxLength={list.max}
          />
        ))}
        <S.GoBtn onClick={onLogin}>Go</S.GoBtn>
        <S.Eyes>
          {isSecret ? (
            <img onClick={() => setIsSecret(!isSecret)} src={Eye} />
          ) : (
            <img onClick={() => setIsSecret(!isSecret)} src={Eyeoff} />
          )}
        </S.Eyes>
      </S.Wrapper>
    </S.FlexWrapper>
  );
};

export default Login;
