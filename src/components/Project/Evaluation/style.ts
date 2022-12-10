import styled from "styled-components";
import { MainColor } from "../../../styles";
import Main from "../../Main";

export const Wrapper = styled.div`
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
export const ContentWrapper = styled.div`
  margin-left: 10%;
  width: 80%;
  display: flex;
  flex-direction: column;
`;
export const SelectBox = styled.select`
  width: 100%;
  font-size: 23px;
  padding: 5px 3px;
  border: none;
  color: ${MainColor};
  &:focus {
    outline: none;
  }
  &::-ms-expand {
    display: none;
  }
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
export const Option = styled.option`
  border: none;
  background-color: none;
`;

export const StarWrapper = styled.div`
  display: flex;
  margin-left: 30px;
`;
export const Star = styled.img`
  width: 30px;
`;

export const InputWrapper = styled.div`
  display: flex;
  height: 50px;
  margin-left: 30px;
  margin-top: 20px;
  border: 1px solid ${MainColor};
  border-radius: 20px;
`;
export const Input = styled.input`
  width: 80%;
  font-size: 20px;
  line-height: 50px;
  padding: 0px 20px;
  box-sizing: border-box;
  border: none;
  border-radius: 20px 0px 0px 20px;
  color: ${MainColor};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${MainColor};
  }
`;
export const InputButton = styled.button`
  border: none;
  width: 20%;
  min-width: 100px;
  margin-right: 0px;
  border-left: 1px solid ${MainColor};
  background-color: white;
  font-size: 20px;
  border-radius: 0px 20px 20px 0px;
  cursor: pointer;
  color: ${MainColor};
  font-weight: bold;
`;