import React, { useReducer, useState } from "react";
import { todo, reducer } from "../reducers/reducer";

//These are custom action objects.
import {addItem} from '../actions/actions';

const Todo = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [state, dispatch] = useReducer(reducer, todo);
  console.log(state);



  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatch({type: "ADD", payload: inputValue})
    dispatch(addItem(inputValue))
    
    
    setInputValue("");
  };

  const todosToRender = state.map((todo) => {
    return <p>{todo.item}</p>;
  });
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="newItem"
          id="newItem"
          onChange={handleChange}
          value={inputValue}
        />
      </form>
      {todosToRender}
    </div>
  );
};

export default Todo;
