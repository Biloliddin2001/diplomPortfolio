import React, { useState } from "react";
import Slide from "react-reveal/Slide";
import Api from "../api/posts.json";

const Home = () => {
  const [count, setCount] = useState({
    counter: 0,
    isLogin: false,
  });

  const [changeInput, setChangeInput] = useState("Change Input: ");

  const dec = () => {
    setCount((count) => ({ ...count, counter: count.counter - 1 }));
  };

  const reset = () => {
    setCount((count) => ({ ...count, counter: (count.counter = 0) }));
  };

  const inc = () => {
    setCount((count) => ({ ...count, counter: count.counter + 1 }));
  };

  const change = (e) => {
    let value = e.target.value;
    setChangeInput(value);
  };
  return (
    <>
      <Slide right>
        <h1>Counter: {count.counter}</h1>
        <button
          type="submit"
          style={{
            cursor: "pointer",
            padding: "10px 30px",
            marginLeft: "1rem",
            fontSize: "20px",
            marginTop: "1rem",
          }}
          onClick={dec}
        >
          -
        </button>
        <button
          type="submit"
          style={{
            cursor: "pointer",
            padding: "10px 30px",
            marginLeft: "1rem",
            fontSize: "20px",
            marginTop: "1rem",
          }}
          onClick={reset}
        >
          0
        </button>
        <button
          type="submit"
          style={{
            cursor: "pointer",
            padding: "10px 30px",
            marginLeft: "1rem",
            fontSize: "20px",
            marginTop: "1rem",
          }}
          onClick={inc}
        >
          +
        </button>
      </Slide>

      <Slide left>
        <h2
          style={{
            marginLeft: "1rem",
            marginBottom: "1rem",
            marginTop: "3rem",
          }}
        >
          {changeInput}
        </h2>
        <input
          type="password"
          id=""
          onChange={change}
          placeholder="Your text..."
          style={{
            height: "45px",
            paddingLeft: "1rem",
            fontSize: "20px",
            width: "250px",
            marginLeft: "1rem",
            border: "1px solid red",
            outline: "none",
          }}
        />
      </Slide>
    </>
  );
};
export default Home;
