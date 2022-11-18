import styled from "styled-components";
import { MainColor, SubColor } from "../../styles";

export const Wrapper = styled.div`
  width: 55%;
  min-width: 340px;
  display: flex;
  margin: auto;
  margin-top: 95px;
  flex-direction: column;
`;
export const MainTitle = styled.h1`
  color: ${MainColor};
  margin-top: 0;
`;
export const Nav = styled.div`
  height: 60px;
  border-bottom: 2px solid ${MainColor};
  display: flex;
  justify-content: space-between;
`;
export const NavRightWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const NavleftWrapper = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1248px) {
    display: none;
  }
`;
export const NavTitle = styled.button`
  font-size: 32px;
  color: ${MainColor};
  background-color: white;
  border: none;
  margin-right: 23px;
  display: flex;
  cursor: pointer;
`;
export const NavSearchWrapper = styled.div`
  border: 2px solid ${MainColor};
  height: 47px;
  width: 256px;
  border-radius: 30px;
  background-color: white;
  display: flex;
  align-items: center;
`;
export const NavSearchIcon = styled.img`
  margin-left: 16px;
  width: 21px;
  cursor: pointer;
`;
export const NaveSearchInput = styled.input`
  height: 40px;
  width: 190px;
  margin-left: 5px;
  font-size: 25px;
  color: ${MainColor};
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${SubColor};
  }
`;
export const NavAddButton = styled.button`
  border: 2px solid ${MainColor};
  height: 47px;
  width: 47px;
  font-size: 35px;
  background-color: white;
  color: ${MainColor};
  border-radius: 50%;
  margin-left: 16px;
  cursor: pointer;
`;

export const Body = styled.div`
  width: 100%;
  height: 500px;
  overflow: auto;
  margin: auto;
  margin-top: 30px;
  display: grid;
  grid-template-columns: 318px 318px 318px;
  gap: 30px 50px;
  justify-content: center;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1906px) {
    grid-template-columns: 318px 318px;
  }
  @media screen and (max-width: 1264px) {
    grid-template-columns: 318px;
  }
`;

export const PWrapper = styled.div`
  height: 180px;
  border: 2px solid ${MainColor};
  border-radius: 30px;
  padding: 10px;
  cursor: pointer;
`;
export const PTitle = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 20px;
  color: ${MainColor};
  text-align: center;
  height: 55px;
  overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.2em;
    height: 2.4em;
`;
export const PHr = styled.hr`
  margin-top: 0px;
  margin-bottom: 0px;
  height: 0px;
  border: 1px solid ${SubColor};
`;
export const Content = styled.div`
  margin: 0px;
  padding-top: 5px;
  height: 85px;
  & > p {
    color: ${MainColor};
    padding: 2px;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.2em;
    height: 4.8em;
  }
`;
export const PDetail = styled.div`
  padding: 3px;
  display: flex;
  justify-content: space-between;
  margin-top: -4px;
`;
export const PDContent = styled.p`
  color: ${MainColor};
  margin: 0px;
  font-size: 13px;
`;
