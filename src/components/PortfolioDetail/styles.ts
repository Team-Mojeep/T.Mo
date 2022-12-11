import styled from "styled-components";
import { Eximg } from "../../assets";
import { MainColor } from "../../styles";

export const Flex = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const PortfolioImg = styled.div`
    background-image: url(${Eximg});
    background-size: 70vh;
    background-repeat: no-repeat;
    width: 700px;
    height: 350px;
    margin-top: 50px;
`;

export const UseSkillWarpper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 700px;
`;

export const SkillTitle = styled.div`
    color: ${MainColor};
    font-size: 24px;
    font-weight: bold;
    margin-top: 40px;
`;

export const UseSkillFlex = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    color: ${MainColor};
    gap: 10px;
    margin-top: 30px;
`;

export const UseSkill = styled.div`
    border: 2px solid;
    border-radius: 30px;
    font-size: 20px;
    padding: 5px 10px;
`;

export const PortFolioWarpper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 700px;
    color: ${MainColor};
`;

export const PortfolioTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
`;

export const PortFolioContent = styled.div`
    font-size: 16px;
    margin-top: 20px;
`;

export const ReviseWarpper = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 24px;
    width: 700px;
    margin-top: 40px;
`;

export const Revise = styled.div`
    color: ${MainColor};
`;