import { useState } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useRef } from "react";

//전달딘 배열의 값의 평균을 계산하여 반환
const getAverage = (list) =>
{
    console.log("평균값 계산 중....");
    if(list.length === 0) 
        return 0;

    // 총합/ 배열길이 = 평균
    const sum = list.reduce((a,b) => a+b); //a는 이전값, b는 새로운값

    return sum/ list.length;
};

const Average = () =>
{
    const [list, setList] = useState([]); //숫자값을 담고 잇는 리스트
    const [number, setNumber] = useState(""); //입력창에 입력할 숫자를 문자로

    const inputE1 = useRef(null);

    // const handleChange = (event) =>
    // {
    //     setNumber(event.target.value);
    // }

    const handleChange = useCallback((event) => {
        setNumber(event.target.value);
    }, []); //빈 배열 = 마운트될때만 handleChange 함수를 생성 (리랜더링 될때는 x)
    //다른 리스트를 주면 그 변수들이 바뀔때 이 함수를 생성

    const handleClick = () =>
    {
        //업데이트된 배열의 새 배열을 반환하는 concat함수 사용
        const newList = list.concat(parseInt(number));
        setList(newList);
        setNumber("");
        inputE1.current.forus();
    }

    const avg = useMemo(()=> getAverage(list), [list]); //list가 바뀌면 getAverage를 호출해라

    return (
        <>
            <div>
                <input value={number} onChange={handleChange} ref={inputE1}/>
                <button onClick = {handleClick}>등록</button>
                <ul>
                    {
                        list.map((value,i) => (
                            <li key={i}>{value}</li>
                        ))
                    }
                </ul>
                <div>
                    {/* 평균값 : {getAverage(list)} */}
                    평균값 : {avg}
                    {/* number가 바뀌면서 계속 랜더링 되어서 평균값 계산 중이 발생 */}
                </div>
                <div> 입력값 : {number}</div>
            </div>
        </>
    );



};

export default Average;