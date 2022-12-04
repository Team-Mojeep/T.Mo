import styled from 'styled-components';
import { MainColor } from '../../styles';
import {SubColor} from '../../styles'
import { COLOR } from '../../styles';

export const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 100px;
`;

export const TopWarpper = styled.div`
    display: flex;
    width: 50%;
`;

export const Profile = styled.img`
    width: 150px;
    border: 2px solid ${SubColor};
    padding-top: 20px;
`;

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 40px;
`;

export const NGMWarpper = styled.div`
    display:flex;
    align-items: center;
`;
    
export const Name = styled.div`
    font-size: 28px;
    color: ${MainColor};
    margin-right: 10px;
`;

export const Grade = styled.div`
    font-size: 24px;
    color: ${MainColor};
    margin-right: 10px;
`;

export const Major = styled.div`
    font-size: 24px;
    color: ${MainColor};
`;

export const TagWarpper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 20px;
    width: 70%;

`;

export const Plus = styled.img`
    margin-right: 7px;
    width:30px;
    cursor: pointer;
`;

export const Tag = styled.div`
    color: ${MainColor};
    font-size: 18px;
    border: 2px solid ${MainColor};
    border-radius: 20px;
    padding: 8px;
    height: 10px;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px 7px 0; 
`;

export const IntroduceWarpper = styled.div`
    display: flex;
    justify-content:center;
`;

export const Introduce = styled.div`
    border: 2px solid ${MainColor};
    color: ${MainColor};
    width: 50%;
    margin-top: 30px;
`;

export const EditButtonWarpper = styled.div`
    width: 50%;
    display:flex;
    justify-content: flex-end;
`;

export const EditButton = styled.button`
    color: white;
    background: ${MainColor};
    border:none;
    border-radius: 20px;
    width: 90px;
    height:30px;
    margin-top: 10px;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Line = styled.div`
    border-bottom: 2px solid ${MainColor};
    width: 50%;
`;

export const TagAddModal = styled.div`
    color:#808080;
    width: 1000px;
`;