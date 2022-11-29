import { PropsWithChildren, ReactNode } from "react";
import * as S from "./styles";

interface ModalDefaulType {
  onClickToggleModal: () => void;
}

type Props = {
  onClickToggleModal: () => void;
  children?: ReactNode;
  width?: string;
  height?: string;
};

function Modal({ onClickToggleModal, children, width, height }: Props) {
  return (
    <S.ModalContainer>
      <S.BackdropBtn>X</S.BackdropBtn>
      <S.DialogBox style={{ width, height }}>
        <S.BackdropBtn
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();

            if (onClickToggleModal) {
              onClickToggleModal();
            }
          }}
        >
          X
        </S.BackdropBtn>
        <S.Children>{children}</S.Children>
      </S.DialogBox>
      <S.Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </S.ModalContainer>
  );
}

export default Modal;

/*
// 컴포넌트에 이렇게 적용
const [isOpenModal, setOpenModal] = useState<boolean>(false);
const OnClickToggleModal = useCallback(() => {
  setOpenModal(!isOpenModal);
}, [isOpenModal]);
return(
  {isOpenModal && (
    <Modal onClickToggleModal={OnClickToggleModal}>
    여기에 내용이 들어가도록 만들기
    </Modal>
  )}
)


//modal size 지정하고 싶은 경우
<Modal onClickToggleModal={OnClickToggleModal} width="123px" height="123px">
    너비와 높이를 지정하는 예시 코드입니다.
</Modal>
*/
