import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "INCR") {
    state = state + 1;
  }
  if (state > 0 && action.type === "DECR") {
    state = state - 1;
  }
  return state;
};
const UseReducer = () => {
  //   const [myNum, setMyNum] = React.useState(0);
  //   console.log(myNum);
  const initialData = 0;
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <div className="btn-grp">
        <p>{state}</p>
        <button onClick={() => dispatch({ type: "INCR" })} className="btn">
          INCR
        </button>
        <span></span>
        <button onClick={() => dispatch({ type: "DECR" })} className="btn">
          DECR
        </button>
      </div>
    </>
  );
};

export default UseReducer;
