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
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
    </>
  );
}

export default Counter;
