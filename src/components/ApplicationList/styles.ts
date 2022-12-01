import styled from "styled-components";
import { COLOR, MainColor } from "../../styles";

export const Container = styled.div`
  width: 888px;
  height: 600px;
  background: #ffffff;
  border: 2px solid ${MainColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 72px;
  ::-webkit-scrollbar {
    width: 9px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${MainColor};
    border-radius: 10px;
  }
`;
export const ProjectName = styled.div`
  font-weight: 600;
  font-size: 40px;
  width: inherit;
  display: flex;
  justify-content: center;
  color: ${MainColor};
  margin-top: 53px;
`;
export const ApplicationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: inherit;
  align-items: center;
  margin-top: 100px;
`;
export const Title = styled.div`
  font-size: 30px;
  line-height: 41px;
  color: ${MainColor};
  font-weight: 700;
  width: 647px;
`;
export const Box = styled.div`
  width: 647px;
  height: 82px;
  background: #ffffff;
  border: 2px solid ${MainColor};
  border-radius: 10px;
  display: flex;
  position: relative;
`;
export const Name = styled.div`
  font-weight: 600;
  font-size: 28px;
  color: ${MainColor};
  height: calc(inherit - 44px);
  border-right: 1px solid ${MainColor};
  padding: 22px;
`;
export const Major = styled.div`
  font-weight: 500;
  font-size: 28px;
  color: ${MainColor};
  height: calc(inherit - 44px);
  padding: 22px;
`;
export const Btns = styled.div`
  display: flex;
  gap: 19px;
  position: absolute;
  top: 15px;
  right: 22px;
`;
export const JoinBtn = styled.button`
  width: 78px;
  height: 52px;
  color: white;
  font-weight: 500;
  font-size: 28px;
  border: none;
  background: ${COLOR.green};
  border-radius: 10px;
`;
export const NoBtn = styled.button`
  width: 78px;
  height: 52px;
  color: white;
  font-weight: 500;
  font-size: 28px;
  border: none;
  background: ${COLOR.red};
  border-radius: 10px;
`;
