import styled from "styled-components";
import { MainColor, SubColor } from "../../styles";

const Input = styled.input`
  border: none;
  color: ${MainColor};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${SubColor};
  }
`;
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.form`
  border: 2px solid ${MainColor};
  width: 45%;
  border-radius: 20px;
  padding: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  min-width: 545px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled(Input)`
  font-size: 30px;
  width: 94%;
  font-weight: bold;
  margin-left: 20px;
`;
export const Hr = styled.hr`
  margin-top: 10px;
  margin-bottom: 0px;
  height: 0px;
  width: 100%;
  border: 2px solid ${MainColor};
  opacity: 30%;
`;

export const SubTitleWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 65px;
  padding: 20px 10px;
  justify-content: space-between;
`;
export const GetWrapper = styled.div`
  font-size: 24px;
  color: ${MainColor};
`;
export const LeftGetWrapper = styled(GetWrapper)`
  display: flex;
  flex-direction: column;
`;

export const GetPeople = styled(Input)`
  font-size: 24px;
  width: 50px;
  text-align: end;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
export const GetDate = styled(Input)`
  font-size: 24px;
`;
export const GetMajor = styled.select`
  font-size: 24px;
  width: 170px;
  margin-left: 12px;
  border: none;
  color: ${MainColor};
  &:focus {
    outline: none;
  }
`;

export const Content = styled.textarea`
  width: 90%;
  min-height: 400px;
  resize: none;
  padding: 10px;
  font-size: 20px;
  color: ${MainColor};
  &:focus {
    outline: none;
  }
  border: 1px solid ${MainColor};
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${MainColor};
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    display: none;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: flex-end;
  margin-top: 10px;
`;
export const AddButton = styled.button`
  width: 40px;
  height: 40px;
  font-size: 35px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid ${MainColor};
  color: ${MainColor};
  background-color: white;
  margin: 0px;
`;

export const Submit = styled.button`
  border: none;
  font-size: 24px;
  font-weight: bold;
  color: ${MainColor};
  background-color: white;
`;
export const SkillWrapper = styled.div`
  display: flex;
  width: 60%;
  flex-wrap: wrap;
  gap: 3px 10px;
`;
export const Skill = styled.button`
  margin: 0px;
  height: 40px;
  padding: 0px 17px;
  font-size: 17px;
  border-radius: 30px;
  border: 1px solid ${MainColor};
  background-color: white;
  color: ${MainColor};
  font-weight: bold;
`;

export const ModalTitle = styled.h2`
  text-align: center;
  margin-bottom: 25px;
`;
export const ModalInput = styled.input`
  width: 494px;
  height: 60px;
  border: 1px solid #808080;
  border-radius: 5px;
  font-size: 18px;
  outline: none;
  padding-left: 30px;
  box-sizing: border-box;
`;
export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding: 0px;
`;

export const ModalButton = styled.button`
  width: 276px;
  height: 50px;
  margin: auto;
  font-size: 16px;
  color: white;
  background-color: ${MainColor};
  margin-top: 70px;
  border: none;
  cursor: pointer;
`;

export const AddImg = styled.input`
  align-self: flex-start;
  margin-bottom: 10px;
  &::-webkit-file-upload-button {
    background-color: #9c9c9c;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 24px;
    margin-top: 5px;
    color: white;
    font-weight: bold;
  }
`;

export const UnderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
