import React, { useReducer, useState } from "react";
import { todo, reducer } from "../reducers/reducer";

//These are custom action objects.
import { addItem, toggleItem, clearCompleted } from "../actions/actions";

//*Here is a functional component
const Todo = (props) => {
  //*1. useState is used here because it is tracking local state that won't be needed or used more widely than this component, it tracks the text input value of the one input field.
  const [inputValue, setInputValue] = useState("");
  //*2. The useReducer takes two arguments, the reducer function I made and imported in line: 2, and my initial state, which in this case I created and import on line: 2 as well. useReducer returns two things, 1st, state which starts the same as my 2nd argument to useReducer, and second is dispatch. Dispatch is a function
  const [state, dispatch] = useReducer(reducer, todo);

  //*This is simply updating local state created with useSTATE for the input field. The benefit of trackin this is that when the time comes to add an Item, we have been tracking and can access the value in this state.
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //*this function is called onSubmit of the form
  const handleSubmit = (e) => {
    //*don't refresh
    e.preventDefault();
    //*I want to called my addItem function (Located in actions.js and inputed into this file on line: 5) and pass in the value currently in my input. addItem is a function that returns an object with type: property (which will be instructions for the reducer function on what to do with the PAYLOAD which is the second property). The inputValue here gets assigned to the payload: property of the object returned from addItem. addItem RETURNS an object which then gets passed into dispatch.
    //*dispatch is a function that takes the argument that you supply it with, and passes it along to your reducer function. [[Seems like a pass through function, a middleman]]
    dispatch(addItem(inputValue));
    setInputValue("");
  };

  const handleClear = (e) => {
    e.preventDefault();
    dispatch(clearCompleted());
  };

  const handleToggle = (todo) => {
    dispatch(toggleItem(todo.id));
  };


  //****Everything below here is just normal React.
  const todosToRender = state.map((todo) => {
    return (
      <p
        className={String(todo.completed)}
        onClick={() => {
          handleToggle(todo);
        }}
      >
        {todo.item}
      </p>
    );
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
        />{" "}
        <button>Add todo</button>
      <button onClick={handleClear}>Clear Completed</button>
      </form>
      {todosToRender}
    </div>
  );
};

export default Todo;
