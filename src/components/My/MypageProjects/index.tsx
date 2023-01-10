import * as S from "../MypageProjects/styles";
import { plus } from "../../../assets";
import {PortfolioGo} from "../../../assets";
import { Link } from "react-router-dom";




function Project(){

    const data = [
        {
          title:
            "가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하",
          content: "~~한 프로젝트를 진행합니다.",
          day: "2022.11.13",
          people: 6,
          tag: "웹",
        },
        {
          title: "프로젝트 같이 하실 백엔들 분들 구합니다.",
          content: "저희는 ~한 프로젝트를 진행하려고 합니다. ~~",
          day: "2022.11.13",
          people: 6,
          tag: "웹",
        },
        {
          title: "프론트 3명 구합니다.",
          content:
            "~~한 프로젝트를 진행하려고 합니다. 유능한 프론트 3명 모집합니다.",
          day: "2022.11.13",
          people: 6,
          tag: "웹",
        },
        {
          title: "프로젝트 같이 프론트한국어어쩌구어쩌프론 아아트한국구1",
          content:
            "~~한 프로젝트를 진행하려고 합니다. 유능젝트를 진행하려고 합니다. 유능젝트를 진행하려고 합니다. 유능젝트를 진행하려고 합니다. 유능한 론트 3명 모집합니합니다. 유능한 론ew트 3명 모집합니합니다. 유능한 론트 3명 모집합니합니다. 유능한 론트 3명 모집합니다.",
          day: "2022.11.13",
          people: 6,
          tag: "웹",
        },
        {
          title: "프로젝트 같이 프론트한국어어쩌구어쩌프론 아아트한국구",
          content:
            "~~한 프로젝트를 진행하려고 합니다. 유능젝트를 진행하려고 합니다. 유능젝트를 진행하려고 합니다. 유능젝트를 진행하려고 합니다. 유능한 론트 3명 모집합니합니다. 유능한 론ew트 3명 모집합니합니다. 유능한 론트 3명 모집합니합니다. 유능한 론트 3명 모집합니다.",
          day: "2022.11.13",
          people: 6,
          tag: "웹",
        },
      ];

    return(
        <>
            <S.ProjectSituationWarpper>
                <S.ProjectSituation>생성/참여한 프로젝트</S.ProjectSituation>
                <Link to="/Portfolio" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <S.Portfolio src={PortfolioGo}/>
                </Link>
            </S.ProjectSituationWarpper>
            <S.Line/>
            <S.ProjectWarpper>
                {data.map((Project) => {
                    return(
                        <S.Project key={Project.title}>
                            <S.ProjectTitle>
                                {
                                    Project.title.length > 25 ?
                                    Project.title.substring(0, 25) + "..." :
                                    Project.title
                                }
                            </S.ProjectTitle>
                            <S.ProjectLine/>
                            <S.ProjectContents>
                                {
                                    Project.content.length > 50 ?
                                    Project.content.substring(0, 60) + "..." :
                                    Project.content
                                }
                            </S.ProjectContents>
                            <S.ProjectOtherContents>
                                <S.ProjectTerm>기간: ~{Project.day}</S.ProjectTerm>
                                <S.ProjectPM>
                                    <S.ProjectPeople>인원: {Project.people}명 모집</S.ProjectPeople>
                                    <S.ProjectMajor>#{Project.tag}</S.ProjectMajor>
                                </S.ProjectPM>
                            </S.ProjectOtherContents>
                            
                        </S.Project>
                    );
                })}
                <S.ProjectPlusWarpper>
                    <Link to="/write">
                        <S.ProjectPlus src={plus}/>
                    </Link>
                </S.ProjectPlusWarpper>
            </S.ProjectWarpper>
            
            
            <S.ProjectSituationWarpper>
                <S.ProjectSituation>신청한 프로젝트</S.ProjectSituation>
            </S.ProjectSituationWarpper>
            <S.Line/>
            <S.ProjectWarpper>
                {data.map((Project) => {
                    return(
                        <S.Project key={Project.title}>
                                <S.ProjectTitle>
                                    {
                                        Project.title.length > 25 ?
                                        Project.title.substring(0, 25) + "..." :
                                        Project.title
                                    }
                                </S.ProjectTitle>
                                <S.ProjectLine/>
                                <S.ProjectContents>
                                    {
                                        Project.content.length > 50 ?
                                        Project.content.substring(0, 60) + "..." :
                                        Project.content
                                    }
                                </S.ProjectContents>
                                <S.ProjectOtherContents>
                                    <S.ProjectTerm>기간: {Project.day}</S.ProjectTerm>
                                    <S.ProjectPM>
                                        <S.ProjectPeople>인원: {Project.people}명 모집</S.ProjectPeople>
                                        <S.ProjectMajor>#{Project.tag}</S.ProjectMajor>
                                    </S.ProjectPM>
                                </S.ProjectOtherContents>
                            </S.Project>
                        );
                    })}
            </S.ProjectWarpper>
        </>
    )
}

export default Project;