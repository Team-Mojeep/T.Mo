import * as S from "../Star/styles";
import {EmptyStar} from "../../../assets";
import {FullStar} from "../../../assets";

function Star(){

    const Star = [
        {
            "star": 8,
	        "content": "프로젝트에 적극적인 자세로 기여했다."
        }
    ];

    //별출력하는 코드 질문임...

    // const PrintStar = () => {
    //     let SumStar = 0;
    //     {Star.map((TotalStar) => {
    //         return(
    //             SumStar += TotalStar.star
    //         );
    //     })}
        
    //     let AvgStar = SumStar / Star.length;

    //     for(let a = 0; a<10; a++){
    //         if(AvgStar > a){
    //             return(
    //                 <S.Star src={FullStar}/>
    //             )
    //         }
    //         else{
    //             return(
    //                 <S.Star src={EmptyStar}/>
    //             )
    //         }
    //     }
    // }

    return(
        <>
            <S.StarMarksWarpper>
                <S.StarMarks>8</S.StarMarks>
                <S.StarWarpper >
                    {/* <PrintStar></PrintStar> */}
                </S.StarWarpper>
            </S.StarMarksWarpper>
            <S.Line/>
            <S.StarWarpper>
                {Star.map((Comment) => {
                    return(
                        <S.StarCommentWarpper key={Comment.content}>
                            <S.StarCommentMarks>{Comment.star}/10</S.StarCommentMarks>
                            <S.Comment>{Comment.content}</S.Comment>
                        </S.StarCommentWarpper>     
                    );
                })}
            </S.StarWarpper>
            <S.SecessionWarpper>
                <S.Secession>탈퇴하기</S.Secession>
            </S.SecessionWarpper>
        </>
    )
}

export default Star;