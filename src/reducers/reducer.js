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
    case ("ADD"):
      return [ //* an array of objects
        ...state, //*all the elements in the array already
        {item: action.payload, //*and one more newly formed object to add.
        completed: false,
        id: uuidv4(),}
      ];
    default:
      return state;
  }
};
