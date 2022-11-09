import styled from 'styled-components';
import { MainColor } from '../../styles';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${MainColor};
  display: flex;
  gap: 302px;
  justify-content: center;
  align-items: center;
  >img{
    width: 482.59px;
    height: 692px;
    @media screen and (max-width: 1500px) {
      display: none;
    }
  }
`;
export const Text = styled.div`
  min-width: 785px;
  font-weight: 600;
  font-size: 90px;
  color: white;
  display: flex;
  flex-direction: column;
  height: 692px;
  >a{
    text-decoration: none;
  }
`;
export const SmallText = styled.span`
  font-size: 50px;
`;
export const GoLogin = styled.button`
 font-weight: 600;
  font-size: 55px;
  color: white;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 82px;
`;