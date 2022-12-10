import { useState } from "react";
import Evaluation from "./Evaluation";
import Photofolio from "./Photofolio";
import * as S from "./style";

function Project(): JSX.Element {
  const token = false; //작성자 아닌지 구분을 어떻게 해야하는 지 모름..
  // true -> 작성자 false -> 작성자 아님
  const finish = true;
  const [starValue, setStarValue] = useState(0);
  let data = {
    majorType: "BACKEND",
    recruitmentType: "WEB",
    period: "2022-11-27",
    number: 5,
    title: "팀원 모집서비스 프로젝트 인원을 모집합니다.",
    content: "팀원을 모집하는 프로젝트입니다. 이름은 T.Mo입니다.",
    skill: ["sad", "gdfg", "DSFgdf"],
  };
  return (
    <S.FlexWrapper>
      <S.Wrapper>
        <S.Title>{data.title}</S.Title>
        <S.Hr />
        <S.SubTitleWrapper>
          <S.EachTitle>
            <S.TitleContent>모집인원 : {data.number}명</S.TitleContent>
            <S.TitleContent>기간 : {data.period}</S.TitleContent>
          </S.EachTitle>
          <S.EachTitle>
            <S.SkillWrapper>
              {data.skill.map((value, index) => {
                return <S.Tag key={index}>{value}</S.Tag>;
              })}
            </S.SkillWrapper>
            <S.Tag># {data.recruitmentType}</S.Tag>
          </S.EachTitle>
        </S.SubTitleWrapper>
        <S.Content>{data.content}</S.Content>
        <S.Date>2022-11-15</S.Date>
        {finish ? (
          <>
            <S.StarWrapper>
              <Evaluation setStarValue={setStarValue} />
            </S.StarWrapper>
            <Photofolio />
          </>
        ) : (
          <>
            {token ? (
              <S.BottomWrapper>
                <S.LeftBottom>
                  <button>수정</button>
                  <button>삭제</button>
                  <button>신청자 목록</button>
                </S.LeftBottom>
                <S.RigthBottom>마감하기</S.RigthBottom>
              </S.BottomWrapper>
            ) : (
              <S.BottomWrapper>
                <S.LeftBottom></S.LeftBottom>
                <S.RigthBottom>신청하기</S.RigthBottom>
              </S.BottomWrapper>
            )}
          </>
        )}
      </S.Wrapper>
    </S.FlexWrapper>
  );
}

export default Project;
