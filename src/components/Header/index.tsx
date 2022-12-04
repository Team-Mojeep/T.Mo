import * as S from "./styles";
import { Logo } from "../../assets";
import { getAccessToken } from "../../utils/Token";
import { Link } from "react-router-dom";
import { Outlet} from "react-router-dom";

function Header(): JSX.Element {
  const accessToken = getAccessToken();

  return (
    <>
      <S.Wrapper>
        <img src={Logo} />
        {accessToken ?
          <S.Btns>
            <Link to="/Login" style={{textDecoration: "none"}}>
              <S.Btn>Mypage</S.Btn>
            </Link>
            <Link to="/Signup" style={{textDecoration: "none"}}>
              <S.Btn>Logout</S.Btn>
            </Link>
          </S.Btns>
          :
          <S.Btns>
            <Link to="/Login" style={{textDecoration: "none"}}>
              <S.Btn>Login</S.Btn>
            </Link>
            <Link to="/Signup" style={{textDecoration: "none"}}>
              <S.Btn>Signup</S.Btn>
            </Link>
          </S.Btns>
        }
      </S.Wrapper>
      <Outlet />
    </>
  );
};

export default Header;