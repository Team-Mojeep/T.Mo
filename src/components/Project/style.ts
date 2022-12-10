import styled from "styled-components";
import { MainColor, SubColor } from "../../styles";
import Main from "../Main";

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
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
  height: auto;
`;

export const Title = styled.p`
  color: ${MainColor};
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
  flex-direction: column;
  width: 90%;
  height: auto;
  padding: 20px 10px;
`;
export const EachTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const TitleContent = styled.span`
  font-size: 24px;
  color: ${MainColor};
`;
export const SkillWrapper = styled.div`
  display: flex;
  gap: 3px 10px;
  width: 60%;
  flex-wrap: wrap;
`;
export const Tag = styled.p`
  margin: 0px;
  height: 40px;
  padding: 0px 17px;
  font-size: 16px;
  line-height: 40px;
  border-radius: 30px;
  border: 1px solid ${MainColor};
  background-color: white;
  color: ${MainColor};
  font-weight: bold;
`;

export const Content = styled.div`
  width: 90%;
  padding: 10px;
  font-size: 20px;
  color: ${MainColor};
  white-space: pre-wrap;
  min-height: 260px;
`;

export const Date = styled.p`
  width: 90%;
  font-size: 20px;
  color: ${MainColor};
`;

export const BottomWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const LeftBottom = styled.div`
  width: 60%;
  display: flex;
  gap: 5%;
  min-width: 378px;
  & > button {
    font-size: 36px;
    color: ${MainColor};
    font-weight: bold;
    border: none;
    background-color: white;
  }
`;
export const RigthBottom = styled.button`
  font-size: 36px;
  color: ${MainColor};
  font-weight: bold;
  background-color: white;
  border: none;
`;

//star
export const StarWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  border: solid ${MainColor};
  border-width: 1px 0px 1px 0px;
`;
