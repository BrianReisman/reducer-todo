import React, { useReducer, useState } from "react";
import { todo, reducer } from "../reducers/reducer";

//These are custom action objects.
import { addItem, toggleItem, clearCompleted } from "../actions/actions";

const Todo = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [state, dispatch] = useReducer(reducer, todo);
  console.log(state);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(inputValue));
    setInputValue("");
  };

  const handleToggle = (completedStatus) => {
    console.log(completedStatus)
    dispatch(toggleItem(completedStatus))
  }

  const handleClear = (e) => {
    e.preventDefault();
    dispatch(clearCompleted())
  }
  const asdf = () => {
    return;
  }
  const todosToRender = state.map((todo) => {
    console.log(todo.completed)
    //*on click called handleToggle passing in this todos completed status.
    return <p onClick={asdf}>{todo.item}</p>;
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
      <button onClick={handleClear}>Clear Completed</button>
    </div>
  );
};

export default Todo;
