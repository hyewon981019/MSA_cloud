import logo from './logo.svg';
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useState, useRef, useCallback } from 'react';

function App() {

  const [todos, setTodos] = useState([
    {
      id : 1,
      text : '리액트 기초 알아보기',
      checked : true
    },
    {
      id : 2,
      text : '컴포넌트 스타일링해보기',
      checked : true
    },
    {
      id : 3,
      text : '일정관리 앱 만들기',
      checked : false
    }
  ]);

  //todosdml id 항목으로 설정될 값
  const nextId = useRef(4);

  const insertTodo = useCallback((text) => {
    // todos 에 들어갈 객체 정의
    const todo = {
      id : nextId.current, //새 id 넣어줌
      text : text,
      checked : false,
    };

    //리스트에 넣는다
    setTodos(todos.concat(todo));
    nextId.current++;

  }, [todos]);

  //파라미터로 전달된 아이디 속성의 값과 일치하는 항목을 삭제
  const removeTodo = useCallback((id) => {
    setTodos(todos.filter(todo => todo.id !== id)); //일치하지 않는 것들만 남겨둠

  }, [todos]);

  //check, uncheck 기능

  const toggle = useCallback(
    (id) =>
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      ),
    [todos],
  );


    return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert insertTodo={insertTodo}/>
      {/* 함수 전달 */}
        <TodoList todos = {todos} removeTodo = {removeTodo} toggle={toggle}/>
      </TodoTemplate>
    </div>
  );
}

export default App;
