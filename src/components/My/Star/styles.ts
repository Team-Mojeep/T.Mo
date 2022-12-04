import styled from 'styled-components';
import { MainColor } from '../../../styles';
import { COLOR } from '../../../styles';

export const Line = styled.div`
    border-bottom: 2px solid ${MainColor};
    width: 50%;
`;

export const StarMarksWarpper = styled.div`
    width: 50%;
    display: flex;
    gap: 10px;
    margin-top: 40px;
`;

export const StarMarks = styled.div`
    font-size: 44px;
    font-weight: bold;
    color: ${MainColor};
`;

export const Star = styled.img`
    width: 40px;
`;

export const StarWarpper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 50%;
    margin-top: 20px;
    margin-left: 40px;
`;

export const StarCommentWarpper = styled.div`
    display: flex;
    gap: 5px;
`;


export const StarCommentMarks = styled.div`
    color: ${MainColor};
    font-weight: bold;
`;

export const StarComment = styled.img`
    width: 20px;
`;

export const Comment = styled.div`
    color: ${MainColor};
    margin-left: 10px;
`;

export const SecessionWarpper = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
`;

export const Secession = styled.button`
    color: white;
    background-color: ${COLOR.red};
    width: 100px;
    height: 30px;
    border: none;
    font-size: 16px;
    border-radius: 20px;
    margin-top: 40px;
`;