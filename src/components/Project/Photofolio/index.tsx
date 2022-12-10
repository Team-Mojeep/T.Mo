import { useState, ChangeEvent } from "react";
import * as S from "./style";

function Photofolio(): JSX.Element {
  const [skill, setSkill] = useState<string[]>([]);
  const [addSkill, setAddSkill] = useState<string>("");
  const [openAddSkill, setOpenAddSkill] = useState<boolean>(false);

  const OnClickAddSkill = () => {
    setOpenAddSkill(false);
    if (addSkill.trim() != "") skill.push(addSkill.trim());
    setAddSkill("");
  };

  const changeSkill = (e: ChangeEvent<HTMLInputElement>) => {
    setAddSkill(e.target.value);
  };

  return (
    <S.Wrapper>
      <S.Title>포토폴리오 작성</S.Title>
      <S.ContentWrapper>
        <S.Label>Github 주소</S.Label>
        <S.GithubInput placeholder="Github 주소를 입력해주세요" />
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.Label>사용한 skill</S.Label>
        <S.SkillWrapper>
          {skill.map((value, index) => {
            return <S.Skill key={index}>{value}</S.Skill>;
          })}
          <S.AddButton
            type="button"
            onClick={() => {
              setOpenAddSkill(true);
            }}
          >
            +
          </S.AddButton>
        </S.SkillWrapper>
        {openAddSkill && (
          <S.SkillInputWrapper>
            <S.SkillInput
              placeholder="사용한 skill을 입력해주세요"
              value={addSkill}
              onChange={changeSkill}
            />
            <S.SkillInputAddButton type="button" onClick={OnClickAddSkill}>
              추가
            </S.SkillInputAddButton>
            <S.SkillInputDelete
              type="button"
              onClick={() => {
                setOpenAddSkill(false);
              }}
            >
              ⨯
            </S.SkillInputDelete>
          </S.SkillInputWrapper>
        )}
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.ContentIput placeholder="부제목을 입력하세요" />
        <S.SubContent placeholder="내용을 입력하세요" />
      </S.ContentWrapper>
      <S.Bottom>
        <S.AddImg
          type="file"
          accept="image/jpg,image/png,image/jpeg,image/gif"
        />
        <S.SubmitButton>작성하기</S.SubmitButton>
      </S.Bottom>
    </S.Wrapper>
  );
}
export default Photofolio;
