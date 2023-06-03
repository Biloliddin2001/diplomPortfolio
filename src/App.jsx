import React from "react";
import Home from "./pages/Home";
import Posts from "./api/posts.json";

const App = () => {
  return (
    <>
      <Home posts={Posts} />
    </>
  );
};
export default App;
