import { v4 as uuidv4 } from "uuid";

export const todo = [
  {
    item: "Learn about reducers",
    completed: false,
    id: uuidv4(),
  },
  {
    item: "Finish Udemy Course Section",
    completed: false,
    id: uuidv4(),
  },
  {
    item: "Watch the next Lambda lecture",
    completed: false,
    id: uuidv4(),
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        item: action.payload,
        completed: false,
        id: uuidv4(),
      };
    case "TOGGLE":
      return;
    case "CLEAR":
      return;
    default:
      return state;
  }
};
