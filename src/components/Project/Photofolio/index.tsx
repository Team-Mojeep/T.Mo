import React, { useState, ChangeEvent } from "react";
import { ChangeStringTag, ChangeTagString } from "../../../utils/Tag";
import * as S from "./style";

function Photofolio(): JSX.Element {
  const [skill, setSkill] = useState<string[]>([]);
  const [addSkill, setAddSkill] = useState<string>("");
  const [openAddSkill, setOpenAddSkill] = useState<boolean>(false);
  const [inputs, setInputs] = useState({
    github: "",
    subtitle: "",
  });
  //github -> 깃허브 주소  subtitle -> 제목  content -> 포폴 내용
  const { github, subtitle } = inputs;
  const [content, setContent] = useState("");

  const sendPhotofolio = () => {
    // skillData가 skill 태그 값들을 문자열로 만들어 놓은 것
    const skillData = ChangeTagString(skill);
    console.log(skillData);
    console.log(ChangeStringTag(skillData));
    //axios
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const OnClickAddSkill = () => {
    setOpenAddSkill(false);
    if (addSkill.trim() != "") skill.push(addSkill.trim());
    setAddSkill("");
  };

  const changeSkill = (e: ChangeEvent<HTMLInputElement>) => {
    setAddSkill(e.target.value);
  };

  const deleteSkill = (index: number) => {
    let filtered = skill.filter((element) => element !== skill[index]);
    setSkill(filtered);
  };

  return (
    <S.Wrapper>
      <S.Title>포토폴리오 작성</S.Title>
      <S.ContentWrapper>
        <S.Label>Github 주소</S.Label>
        <S.GithubInput
          placeholder="Github 주소를 입력해주세요"
          name="github"
          value={github}
          onChange={onChange}
        />
      </S.ContentWrapper>
      <S.ContentWrapper>
        <S.Label>사용한 skill</S.Label>
        <S.SkillWrapper>
          {skill.map((value, index) => {
            return (
              <S.Skill
                key={index}
                type="button"
                onClick={() => deleteSkill(index)}
              >
                {value}
              </S.Skill>
            );
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
        <S.ContentIput
          placeholder="부제목을 입력하세요"
          name="subtitle"
          value={subtitle}
          onChange={onChange}
        />
        <S.SubContent
          placeholder="내용을 입력하세요"
          name="content"
          value={content}
          onChange={onChangeTextarea}
        />
      </S.ContentWrapper>
      <S.Bottom>
        <S.AddImg
          type="file"
          accept="image/jpg,image/png,image/jpeg,image/gif"
        />
        <S.SubmitButton onClick={sendPhotofolio}>작성하기</S.SubmitButton>
      </S.Bottom>
    </S.Wrapper>
  );
}
export default Photofolio;
