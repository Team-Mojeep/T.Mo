import { Link } from "react-router-dom";
import * as S from "./styles";

function PortfolioDetail(): JSX.Element{

    const data = [
        {
            tag: "게임"
        },
        {
            tag: "안드로이드"
        },
        {
            tag: "프론트엔드"
        }
    ];

    return (
        <S.Flex>
            <S.PortfolioImg/>
            <S.UseSkillWarpper>
                <S.SkillTitle>사용한 언어/기술</S.SkillTitle>
                <S.UseSkillFlex>
                    {data.map((Portfolio)=>{
                        return(
                            <S.UseSkill>{Portfolio.tag}</S.UseSkill>
                        );
                    })}
                </S.UseSkillFlex>
            </S.UseSkillWarpper>
            <S.PortFolioWarpper>
                <S.PortfolioTitle>쉽고 간편하게 프로젝트 팀원을 모집하세요!</S.PortfolioTitle>
                <S.PortFolioContent>
                    프로젝트 소개: 이 프로젝트는 우리학교 학생이 팀프로젝트를 자유롭게 참여하고 경험할 수 있으며 팀원 인원을 쉽게 모을 수 있습니다. 맏은 역할: 저는 Front-end와 디자인을맏아 진행하였습니다. 개발하면서 생긴 이슈: 이 프로젝트를 진행하면서 지금까지는 봐오지 못한 이슈를 마딱드렸습니다. 이슈는 type을 설정해주는 부분에서 문제가 생겼으며 이슈를 해결하기위해 type을 다른 파일로 빼서 여러 파일에서 불러와 이슈를 해결하였습니다.배운점: 프로젝트를 진행하면서 느꼈던점으로는 React와 Typescript를 처음 사용해개발해 새로운 경험을 할 수 있었습니다.
                </S.PortFolioContent>
            </S.PortFolioWarpper>
            <S.ReviseWarpper>
                <Link to="/main" style={{textDecoration: "none"}}>
                    <S.Revise>수정하기</S.Revise>
                </Link>
            </S.ReviseWarpper>
        </S.Flex>
    )
}

export default PortfolioDetail;