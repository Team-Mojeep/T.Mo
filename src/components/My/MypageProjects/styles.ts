import styled from 'styled-components';
import { MainColor } from '../../../styles';

export const ProjectSituationWarpper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-top: 70px;
`;

export const ProjectSituation = styled.div`
        color: ${MainColor};
        font-size: 24px;
        margin-bottom: 10px;
`;

export const Portfolio = styled.img`
    width: 20px;
    margin-right: 20px;
    cursor: pointer;
`;

export const Line = styled.div`
    border-bottom: 2px solid ${MainColor};
    width: 50%;
`;

export const ProjectWarpper = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
    margin-top: 40px;
`;

export const Project = styled.div`
    border: 2px solid ${MainColor};
    width: 280px;
    height: 180px;
    border-radius: 20px;
    margin-bottom: 40px;
    padding: 10px;
    box-shadow: 0 4px 4px #c1c1c1;
    cursor: pointer;
`;

export const ProjectTitle = styled.div`
    color: ${MainColor};
    font-size: 20px;
    padding: 0 5px;
    height: 54px;
`;

export const ProjectLine = styled.div`
    background: ${MainColor};
    width: 100%;
    height:1px;
    margin-top: 5px;
`;

export const ProjectContents = styled.div`
    margin-top: 10px;
    font-size: 14px;
    color: ${MainColor};
    width: 100%;
    height: 70px;
    padding: 0 5px;
`;

export const ProjectOtherContents = styled.div`
    color: ${MainColor};
    font-size: 14px;
    padding: 0 5px;
`;

export const ProjectTerm = styled.div`
    
`;

export const ProjectPM = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProjectPeople = styled.div`

`;

export const ProjectMajor = styled.div`

`;

export const ProjectPlusWarpper = styled.div`
    width: 280px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProjectPlus = styled.img`
    width: 60px;
    cursor:pointer;
`;