import { click } from "@testing-library/user-event/dist/click";
import { useState, useCallback, ChangeEvent } from "react";
import Modal from "../Modal";
import * as S from "./style";

function Write(): JSX.Element {
  const [skill, setSkill] = useState<string[]>([]);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const OnClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  const [addSkill, setAddSkill] = useState<string>("");

  const OnClickAddSkill = () => {
    OnClickToggleModal();
    skill.push(addSkill.trim());
    setAddSkill("");
  };
  const changeSkill = (e: ChangeEvent<HTMLInputElement>) => {
    setAddSkill(e.target.value);
  };

  const deleteSkill = (index: number) => {
    console.log(skill[index]);
    let filtered = skill.filter((element) => element !== skill[index]);
    setSkill(filtered);
    console.log(skill);
  };

  // type Information = {
  //   recruitmentType: string;
  //   technology: string;
  //   period: Date;
  //   number: number;
  //   title: string;
  //   content: string;
  // };

  // const [inputs, setInputs] = useState<Information>({
  //   recruitmentType: "",
  //   technology: "",
  //   period: new Date(),
  //   number: 0,
  //   title: "",
  //   content: "string",
  // });

  // const { recruitmentType, technology, period, number, title, content } =
  //   inputs;

  // const change = (e: any) => {
  //   setInputs({
  //     ...inputs,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  return (
    <S.FlexWrapper>
      {isOpenModal && (
        <Modal
          onClickToggleModal={OnClickToggleModal}
          width="600px"
          height="400px"
        >
          <S.ModalWrapper>
            <S.ModalTitle>기술 스택 추가하기</S.ModalTitle>
            <S.ModalInput onChange={changeSkill} value={addSkill} autoFocus />
            <S.ModalButton onClick={OnClickAddSkill}>추가하기</S.ModalButton>
          </S.ModalWrapper>
        </Modal>
      )}
      <S.Wrapper>
        <S.Title placeholder="제목을 입력하세요" />
        <S.Hr />
        <S.SubTitleWrapper>
          <S.GetWrapper>
            모집 인원 :
            <S.GetPeople type="number" placeholder="00" max="9999" min="0" />명
          </S.GetWrapper>

          <S.LeftGetWrapper>
            <div>
              기간 : <S.GetDate type="date" />
            </div>
            <div>
              분야 :
              <S.GetMajor defaultValue="web">
                <option value="WEB">Web</option>
                <option value="APP">APP</option>
                <option value="EMBEDDED">Embedded</option>
                <option value="ECT">Ect</option>
              </S.GetMajor>
            </div>
          </S.LeftGetWrapper>
        </S.SubTitleWrapper>
        <S.Content placeholder="내용을 입력하세요" />

        <S.BottomWrapper>
          <S.AddImg
            type="file"
            accept="image/jpg,image/png,image/jpeg,image/gif"
          />

          <S.UnderWrapper>
            <S.SkillWrapper>
              <>
                {skill.map((value, index) => {
                  return (
                    <S.Skill
                      type="button"
                      key={index}
                      onClick={() => deleteSkill(index)}
                    >
                      {value}
                    </S.Skill>
                  );
                })}
              </>
              <S.AddButton type="button" onClick={OnClickToggleModal}>
                +
              </S.AddButton>
            </S.SkillWrapper>
            <S.Submit>작성하기</S.Submit>
          </S.UnderWrapper>
        </S.BottomWrapper>
      </S.Wrapper>
    </S.FlexWrapper>
  );
}

export default Write;
