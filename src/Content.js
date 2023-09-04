import React, { useState } from "react";
import "./App.css";

export default function Content() {
  const [fizzDivider, setFizzDivider] = useState(3);
  const [buzzDivider, setBuzzDivider] = useState(5);
  const [numbers, setNumbers] = useState([]);

  const handleNumber = (event) => {
    setNumbers(Array.from({ length: event.target.value }, (_, i) => i + 1));
  };

  const handleDividers = (event) => {
    if (event.target.name === "fizz") {
      setFizzDivider(event.target.value);
    } else {
      setBuzzDivider(event.target.value);
    }
  };

  return (
    <div className="Container">
      <div className="InputForm">
        <p>Fizz divider:</p>
        <input name="fizz" value={fizzDivider} onChange={handleDividers} />
        <p>Buzz divider:</p>
        <input name="buzz" value={buzzDivider} onChange={handleDividers} />
        <p>Number:</p>
        <input onChange={handleNumber} />
      </div>
      <div className="ScrollBackground">
        <div className="NumberList">
          {numbers.map((num) => (
            <p key={num}>
              {num}: {num % fizzDivider === 0 ? "Fizz" : ""}
              {num % buzzDivider === 0 ? "Buzz" : ""}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
