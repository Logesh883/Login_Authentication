import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Done from "./Components/Done";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/signup" Component={Signup} />
          <Route path="/done" Component={Done} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
