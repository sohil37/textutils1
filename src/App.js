import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App(props) {
  const [appMode, setAppMode] = useState("light");

  let handleAppMode = (event) => {
    if (event.target.checked) {
      setAppMode("dark");
      props.root.setAttribute("class", "bg-dark");
      document.getElementsByTagName("body")[0].setAttribute("class", "bg-dark");
    } else {
      setAppMode("light");
      props.root.setAttribute("class", "bg-light");
      document
        .getElementsByTagName("body")[0]
        .setAttribute("class", "bg-light");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          appMode={appMode}
          handleAppMode={handleAppMode}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<TextForm appMode={appMode} />}
          ></Route>
          <Route
            exact
            path="/about"
            element={<About appMode={appMode} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
