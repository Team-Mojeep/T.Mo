import * as S from "../My/styles";
import { EXProFile } from "../../assets";
import { plus } from "../../assets"
import {useState, useCallback} from "react";
import Modal from "../Modal";
import Project from "./MypageProjects";
import Star from "./Star";

function My(): JSX.Element{
    
    const [isOpenModal, setOpenModal] = useState<boolean>(false);
    const OnClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
    }, [isOpenModal]);

    function AddTag(){
        
    }

    return(
        <>
            {isOpenModal && (                            
                <Modal onClickToggleModal={OnClickToggleModal}>
                    <S.ModalFlex>
                        <S.TagAdd>기술 스택 추가하기</S.TagAdd>
                        <S.TagAddInput placeholder="기술 추가" />
                        <S.TagAddBtn onClick={AddTag}>추가 하기</S.TagAddBtn>
                    </S.ModalFlex>
                </Modal>
                )}
            <S.FlexWrapper>
                <S.TopWarpper>
                    <S.Profile src = {EXProFile}/>
                    <S.Top>
                        <S.NGMWarpper>
                            <S.Name>홍길동</S.Name>
                            <S.Grade>1학년</S.Grade>
                            <S.Major>FrontEnd</S.Major>
                        </S.NGMWarpper>
                        <S.TagWarpper>
                            <S.Plus src={plus} onClick={OnClickToggleModal}/>
                        </S.TagWarpper>
                    </S.Top>
                </S.TopWarpper>


                <S.Introduce>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</S.Introduce>
                <S.EditButtonWarpper>
                    <S.EditButton>수정하기</S.EditButton>
                </S.EditButtonWarpper>

                <Project/>
                <Star/>
                
            </S.FlexWrapper>
        </>
    );
};

export default My;