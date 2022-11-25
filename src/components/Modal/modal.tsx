import { PropsWithChildren } from "react";
import * as S from "./index";

interface ModalDefaulType {
  onClickToggleModal: () => void;
}
function Modal({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaulType>) {
  return (
    <S.ModalContainer>
      <S.BackdropBtn>X</S.BackdropBtn>
      <S.DialogBox>
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
*/
