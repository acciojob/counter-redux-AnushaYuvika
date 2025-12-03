import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/counterSlice";
import './../styles/App.css';
import React from "react";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="card">
      <h1>{count}</h1>

      {/* <span className="title">Counter App</span>  */}

        <button 
            data-cy="btn-inc"
            onClick={() => dispatch(increment())}
          >
            increment
          </button>

          <button 
            data-cy="btn-dec"
            onClick={() => dispatch(decrement())}
          >
            decrement
          </button>
    </div>
    </>
  );
}

export default Counter;
