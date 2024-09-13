import React, { useState, useRef } from "react";

function Cell({ dosiLength }) {
  const [letters, setLetters] = useState(Array(dosiLength).fill(""));
  const inputRefs = useRef([]);

  return (
    <div className="flex gap-1">
      {letters.map((letter, index) => (
        <div
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          maxLength="1"
          value={letter}
          className="border border-slate-500 rounded w-20 h-20 text-center"
          readOnly
        />
      ))}
    </div>
  );
}

export default Cell;