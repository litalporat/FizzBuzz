import React, { useState } from "react";
import "./App.css";

export default function Content() {
  const [fizzDiv, setFizzDiv] = useState(3);
  const [buzzDiv, setBuzzDiv] = useState(5);
  const [numbers, setNumbers] = useState([]);

  const handleNumber = (e) => {
    const arr = Array.from({ length: e.target.value }, (_, i) => i + 1);
    setNumbers(arr);
  };

  const handleDividers = (e) => {
    if (e.target.id === "FizzDiv") {
      setFizzDiv(e.target.value);
    } else {
      setBuzzDiv(e.target.value);
    }
  };

  return (
    <div className="Container">
      <div className="Input-form">
        <p>Fizz divider:</p>
        <input id="FizzDiv" value={fizzDiv} onChange={handleDividers} />
        <p>Buzz divider:</p>
        <input id="BuzzDiv" value={buzzDiv} onChange={handleDividers} />
        <p>Number:</p>
        <input id="Number" onChange={handleNumber} />
      </div>
      <div className="Scroll-bg">
        <div className="Scroll-div">
          {numbers &&
            numbers.map((num) => (
              <p key={num}>
                {num}: {num % fizzDiv === 0 ? "Fizz" : ""}
                {num % buzzDiv === 0 ? "Buzz" : ""}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}
