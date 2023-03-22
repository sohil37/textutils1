import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  let handleOnChange = (event) => {
    setText(event.target.value);
  };

  let handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  let handleCopy = () => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert(`Copied text: ${text}`);
      },
      () => {
        alert("Failed to copy");
      }
    );
  };

  if (props.appMode === "light") {
    return (
      <div className="container">
        <h1 className="mt-3">Enter text to analyse</h1>
        <textarea
          className="form-control mt-3"
          value={text}
          aria-label="With textarea"
          onChange={handleOnChange}
          rows="8"
        ></textarea>
        <button
          type="button"
          onClick={handleUpperCase}
          className="btn btn-primary mt-3"
        >
          Convert to uppercase
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="btn btn-primary mt-3 mx-3"
        >
          Copy to clipboard
        </button>
      </div>
    );
  } else if (props.appMode === "dark") {
    return (
      <div className="container bg-dark">
        <h1 className="mt-3 text-light">Enter text to analyse</h1>
        <textarea
          className="form-control mt-3 text-light bg-dark"
          value={text}
          aria-label="With textarea"
          onChange={handleOnChange}
          rows="8"
        ></textarea>
        <button
          type="button"
          onClick={handleUpperCase}
          className="btn btn-primary mt-3"
        >
          Convert to uppercase
        </button>
        <button
          type="button"
          onClick={handleCopy}
          className="btn btn-primary mt-3 mx-3"
        >
          Copy to clipboard
        </button>
      </div>
    );
  }
}
