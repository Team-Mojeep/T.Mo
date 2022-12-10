import styled from "styled-components";
import { MainColor } from "../../../styles";
import Main from "../../Main";

export const Wrapper = styled.form`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin: 30px 0px;
`;

export const Title = styled.h1`
  font-size: 35px;
  color: ${MainColor};
  margin: 0px;
  margin-bottom: 10px;
`;

export const AddImg = styled.input`
  align-self: flex-start;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-top: 10px;
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

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px 30px 20px;
`;
export const Label = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${MainColor};
  margin: 0px;
`;
export const GithubInput = styled.input`
  font-size: 20px;
  border: 0px;
  width: 90%;
  margin-left: 1%;
  border-bottom: 1px solid ${MainColor};
  height: 40px;
  line-height: 40px;
  color: ${MainColor};
  padding-left: 10px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${MainColor};
  }
`;

export const SkillWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  gap: 3px 10px;
  margin-left: 1%;
  padding-top: 10px;
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

export const AddButton = styled.button`
  cursor: pointer;
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
export const SkillInputWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;
export const SkillInput = styled.input`
  font-size: 20px;
  border: 0px;
  width: 70%;
  margin-left: 1%;
  border-bottom: 1px solid ${MainColor};
  height: 40px;
  line-height: 40px;
  color: ${MainColor};
  padding-left: 10px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${MainColor};
  }
`;

export const SkillInputAddButton = styled.button`
  cursor: pointer;
  height: 40px;
  font-size: 17px;
  color: white;
  border-radius: 20px;
  padding: 0px 10px;
  border: 1px solid ${MainColor};
  font-weight: bold;
  background-color: ${MainColor};
`;

export const SkillInputDelete = styled(AddButton)`
  line-height: 10px;
  margin-left: 10px;
`;

export const ContentIput = styled(GithubInput)`
  margin: 0px;
`;
export const SubContent = styled.textarea`
  margin-top: 10px;
  resize: none;
  width: 90%;
  border: 1px solid ${MainColor};
  height: 200px;
  margin-left: 20px;
  font-size: 18px;
  padding: 10px;
  box-sizing: border-box;
  color: ${MainColor};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${MainColor};
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 93%;
`;

export const SubmitButton = styled.button`
  font-size: 20px;
  color: ${MainColor};
  border: none;
  background-color: white;
  font-weight: bold;
`;
