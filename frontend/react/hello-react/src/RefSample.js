import { useRef } from "react";

const RefSample = () => {

    const id = useRef(1);
    //컴포넌트안에서 상태변수 말고 일반변수 쓸 때 useRef로 여러 곳에서 참조
    //랜더링하고 
    const setId = (id) =>
    {
        id.current = id;

    }

    const printId = () => {
        console.log(id.current);
    }

    return <div>refsample</div>

}

export default RefSample;