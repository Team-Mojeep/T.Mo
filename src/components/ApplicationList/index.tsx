import * as S from "./styles";
import { ApplicationType } from "../../interface";

function ApplicationList(): JSX.Element {
  return (
    <S.Container>
      <S.ProjectName>T.Mo 프로젝트</S.ProjectName>
      <S.ApplicationList>
        <S.Title>지원자 명단</S.Title>
        <Application />
      </S.ApplicationList>
    </S.Container>
  );
}

function Application() {
  const ApplicationInfo: ApplicationType[] = [
    { name: "안윤지", major: "프론트엔드" },
    { name: "강진현", major: "프론트엔드" },
    { name: "김규하", major: "프론트엔드" },
    { name: "김소연", major: "백엔드" },
    { name: "최성현", major: "백엔드" },
    { name: "김민채", major: "백엔드" },
  ];

  return (
    <>
      {ApplicationInfo.map((list) => (
        <S.Box>
          <S.Name>{list.name}</S.Name>
          <S.Major>분야 : {list.major}</S.Major>
          <S.Btns>
            <S.JoinBtn>수락</S.JoinBtn>
            <S.NoBtn>거절</S.NoBtn>
          </S.Btns>
        </S.Box>
      ))}
    </>
  );
}

export default ApplicationList;
