import styled from "styled-components";
import { MainColor } from "../../styles";

function NotFoundPage(): JSX.Element {
  return (
    <Wrapper>
      <Num>404</Num>
      <Text>Not Found</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${MainColor};
`;
const Num = styled.span`
  font-size: 120px;
`;
const Text = styled.span`
  font-size: 100px;
`;

export default NotFoundPage;