// Adding
// Toggle
// Clearing

const ADD = 'ADD';
const TOGGLE = 'TOGGLE';
const CLEAR = 'CLEAR';

//*What do I need to receive to act on this?
//*What do I want to return?
//*   1. This is the action OBJECT {} that the reducer takes
//*   2. MUST have a type: property
//*   3. MAYBE have a payload: property. If the action TAKES an argument, then it GIVES a payload: property to its returned object.

export const addItem = (newItem) => {
  return {type: ADD, payload: newItem}
}