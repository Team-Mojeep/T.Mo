import * as S from "./style";
import { FullStar, EmptyStar } from "../../../assets/index";
import React, { useState } from "react";

interface Props {
  setStarValue: React.Dispatch<React.SetStateAction<number>>;
}
const Evaluation = ({ setStarValue }: Props) => {
  const [star, setStar] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [selected, setSelected] = useState("false");


  const changeStar = (index: number) => {
    let copyStar: boolean[] = [];
    for (let i = 0; i <= index; i++) {
      copyStar.push(true);
    }
    for (let i = 0; i < 9 - index; i++) {
      copyStar.push(false);
    }
    setStar(copyStar);
    setStarValue(copyStar.filter((e) => e === true).length);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    console.log(selected);
  };

  return (
    <S.Wrapper>
      <S.Title>리뷰</S.Title>
      <S.ContentWrapper>
        <S.SelectBox onChange={handleSelect} value={selected}>
          <S.Option value={"false"} disabled>
            ▼ 리뷰를 작성할 사람을 골라주세요.
          </S.Option>
          <S.Option value={"멤버멤버멤버멤버멤버"}>
            멤버멤버멤버멤버멤버
          </S.Option>
          <S.Option value={"멤버 2"}>멤버 2</S.Option>
          <S.Option value={"멤버 3"}>멤버 3</S.Option>
        </S.SelectBox>

        <S.StarWrapper>
          {star.map((value, index) => {
            return value ? (
              <S.Star
                src={FullStar}
                onClick={() => changeStar(index)}
                key={index}
              />
            ) : (
              <S.Star
                src={EmptyStar}
                onClick={() => changeStar(index)}
                key={index}
              />
            );
          })}
        </S.StarWrapper>
        <S.InputWrapper>
          <S.Input placeholder="리뷰를 작성해주세요" />
          <S.InputButton>작성하기</S.InputButton>
        </S.InputWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
export default Evaluation;
