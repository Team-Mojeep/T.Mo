import * as S from "./styles";
import { Logo } from "../../assets";
import { getAccessToken } from "../../utils/Token";
import { Outlet } from "react-router-dom";

function Header(): JSX.Element {
  const accessToken = getAccessToken();

  return (
    <>
      <S.Wrapper>
        <img src={Logo} />
        {accessToken ?
          <S.Btns>
            <S.Btn>Mypage</S.Btn>
            <S.Btn>Logout</S.Btn>
          </S.Btns>
          :
          <S.Btns>
            <S.Btn>Login</S.Btn>
            <S.Btn>Signup</S.Btn>
          </S.Btns>
        }
      </S.Wrapper>
      <Outlet />
    </>
  );
};

export default Header;