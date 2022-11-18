import styled from "styled-components";
import { MainColor, SubColor } from "../../styles";

export const Wrapper = styled.div`
  height: 73px;
  width: 100vw;
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Btns = styled.div`
  font-weight: 500; 
  font-size: 36px;
  display: flex;
  gap: 124px;
`;
export const Btn = styled.span`
  :hover{
    color: ${MainColor};
  }
  color: ${SubColor};
`;