import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md"
import "./TodoListItem.scss";
import cn from 'classnames'; //모듈
const TodoListItem = ({todo, removeTodo, toggle}) =>
{

    const {id, text, checked} = todo; //객체 비구조화


    return(
        <div className="TodoListItem">
            <div className={cn('checkBox', {checked})} onClick={()=> {toggle(id)}}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/> }
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick = {()=> removeTodo(id)}> 
                <MdRemoveCircleOutline/>
            </div>
        </div>
    )
}

export default TodoListItem;