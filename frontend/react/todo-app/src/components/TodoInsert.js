import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';
import { useState, useCallback } from 'react';

const TodoInsert = ({insertTodo}) =>
{

  const [value, setValue] = useState('');

  const handleChange = useCallback((event) =>{ //마운트될때만 해당 함수가 만들어진다.
    setValue(event.target.value)
  }, []);

  const handleSubmit = useCallback((event) =>
  {
    insertTodo(value);
    setValue('');
    event.preventDefault(); //서버에게 보내는 행위를 막음

  },[value, insertTodo]);

    return (
      <form className="TodoInsert" onSubmit={handleSubmit}>
          <input placeholder="할 일을 입력하세요" value = {value} onChange={handleChange}/>
          <button type="submit"><MdAdd /></button>
      </form> 
    );

};

export default TodoInsert;