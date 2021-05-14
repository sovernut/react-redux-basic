import { createStore } from "redux";

const initialstate = { counter: 0, showCounter: true };

const counterReducer = (state = initialstate, action) => {
  if (action.type === "inc") {
    return {
        ...state,
      counter: state.counter + 1,
    };
  }
  if (action.type === "inc_amt") {
    return {
        ...state,
      counter: state.counter + action.amount,
    };
  }
  if (action.type === "dec") {
    return {
        ...state,
      counter: state.counter - 1,
    };
  }

  if (action.type === "toggle") {
    return {
        ...state,
      showCounter: !state.showCounter,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
