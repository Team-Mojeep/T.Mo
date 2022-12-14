import * as S from "./styles";
import { useState } from "react";
import { Eye } from "../../assets";
import { Eyeoff } from "../../assets";
import { AuthType } from "../../interface";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://192.168.167.105";

function Login(): JSX.Element {
  const [isSecret, setIsSecret] = useState<boolean>(false);
  const passwordType = isSecret ? "text" : "password";
  const naigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  const Text: AuthType[] = [
    { title: "Email", type: "text", name: "email" },
    { title: "Password", type: passwordType, name: "password" },
  ];

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const login = async () => {
    await axios
      .post(`${BASE_URL}/user/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("t_mo_access_token", res.data.accessToken);
      });
  };

  const onLogin = () => {
    try {
      login();
    } catch (error) {
      console.log(error);
    }
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
}

export default Login;
