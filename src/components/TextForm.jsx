import React, { useState } from "react";
import PropTypes from "prop-types";

const TextForm = (props) => {
  const [text, seText] = useState("");

  const handleOnChange = (event) => {
    seText(event.target.value);
  };

  const handleUpperClick = () => {
    const newText = text.toUpperCase();
    seText(newText);
    props.showAlert(" Converted to UPPERCASE", "success ");
  };

  const handleLowerClick = () => {
    const newText = text.toLowerCase();
    seText(newText);
    props.showAlert(" Converted to lowercase", "success ");
  };

  const handleCopyClick = () => {
    const newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert(" Copied to Clipboard", "success ");
  };

  const handleExtraSpaceClick = () => {
    const newText = text.split(/[ ]+/);
    seText(newText.join(" "));
    props.showAlert(" Remove all extra spaces", "success ");
  };
  const handleClearClick = () => {
    seText("");
    props.showAlert(" Clear all successful", "success ");
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center my-5">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            placeholder="Start typing or copy and paste your document here..."
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#1a2744" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          onClick={handleUpperClick}
          className="btn btn-primary mx-2 my-1 "
        >
          Convert To UPPERCASE
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleLowerClick}
          className="btn btn-primary mx-2 my-1"
        >
          Convert To lowercase
        </button>

        <button
          disabled={text.length === 0}
          onClick={handleCopyClick}
          className="btn btn-primary mx-2 my-1"
        >
          Copy All
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleExtraSpaceClick}
          className="btn btn-primary mx-2 my-1"
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleClearClick}
          className="btn btn-primary mx-2 my-1"
        >
          Clear all
        </button>
      </div>

      <div className="container my-4">
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words , {text.length} characters
        </p>
        <p>
          Read time :{" "}
          {text.split(" ").filter((element) => {
            return element.length !== 0;
          }).length * 0.008}{" "}
          Minutes
        </p>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "dark" ? "#050F24" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
            >
              <h2>Preview</h2>
            </button>
          </h2>
          <div
            style={{
              backgroundColor: props.mode === "dark" ? "#1a2744" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="collapseOne"
            className={`accordion-collapse collapse show text-${
              props.mode === "dark" ? "white" : "black"
            }`}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {text.length > 0 ? text : "Enter something to preview..."}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Enter The Text To Analyze",
};



export default TextForm;
