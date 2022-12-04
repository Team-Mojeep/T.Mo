import * as S from "./styles";
import { OpenLogo } from "../../assets";
import { Link } from "react-router-dom";
import { RightArrow } from "../../assets";

function Open(): JSX.Element {
  return (
    <S.Background>
      <S.Text>
        <S.SmallText>팀프로젝트,</S.SmallText>
        보다 쉽고 간편하게
        <br />
        지원하고
        <br />
        관리하세요.
        <br />
        <Link to="/login">
          <S.GoLogin>
            Get started now <img src={RightArrow} />
          </S.GoLogin>
        </Link>
      </S.Text>
      <img src={OpenLogo} />
    </S.Background>
  );
}

export default Open;
