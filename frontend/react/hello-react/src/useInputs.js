import { useReducer } from "react";

function reducer(state, action)
{
    return {
        ...state,
        [action.name] : action.value,
    };
}
function useInputs(initialForm)
{
    //함수
    //커스텀 훅

    const [state, dispatch] = useReducer(reducer, initialForm);

    const handleChange = (event) =>
    {
        dispatch(event.target);
    };

    return [state, handleChange];


}

export default useInputs;