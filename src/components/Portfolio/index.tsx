import * as S from "../Portfolio/styles";

function Portfolio(): JSX.Element{
    
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
          title: "프로젝트 같이 프론트한국어어쩌구어쩌프론 아아트한국구",
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
        {
          title: "프로젝트 같이 프론트한국어어쩌구어쩌프론 아아트한국구",
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
        <S.MainBody>
            <S.FlexWrapper>
                <S.PortfolioTitle>포트폴리오</S.PortfolioTitle>

                <S.Body>
                    {data.map((project) => {
                    return (
                        <S.PWrapper key={project.title}>
                            <S.PTitle>{project.title}</S.PTitle>
                            <S.PHr />
                            <S.Content>
                                <p>{project.content}</p>
                            </S.Content>
                            <S.PDetail>
                                <div>
                                <S.PDContent>기간: ~{project.day}</S.PDContent>
                                <S.PDContent>인원: {project.people}명 모집</S.PDContent>
                                </div>
                                <S.PDContent>#{project.tag}</S.PDContent>
                            </S.PDetail>
                        </S.PWrapper>
                        );
                    })}
                </S.Body>
            </S.FlexWrapper>
        </S.MainBody>
    );
}

export default Portfolio;