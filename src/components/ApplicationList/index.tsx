import * as S from "./styles";

function ApplicationList(): JSX.Element {
  return (
    <S.Container>
      <S.ProjectName>T.Mo 프로젝트</S.ProjectName>
      <S.ApplicationList>
        <S.Title>지원자 명단</S.Title>
        <S.Application>
          <S.Name>안윤지</S.Name>
          <S.Major>분야 : 프론트엔드</S.Major>
          <S.Btns>
            <S.JoinBtn>수락</S.JoinBtn>
            <S.NoBtn>거절</S.NoBtn>
          </S.Btns>
        </S.Application>
      </S.ApplicationList>
    </S.Container>
  );
};

export default ApplicationList;