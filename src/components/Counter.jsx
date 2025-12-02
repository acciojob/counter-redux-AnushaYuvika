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

      <span className="title">Counter App</span> <br /> <br />

      <div className="btn-box">
        <button 
            data-cy="btn-inc"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>

          <button 
            data-cy="btn-dec"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
      </div>
    </div>
    </>
  );
}

export default Counter;
