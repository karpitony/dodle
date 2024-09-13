import React from "react";
import Cell from "./Cell"; // Cell 컴포넌트 import

export default function GameGrid({ attempts, dosiLength }) {
  return (
    <div className="flex flex-col justify-center items-center">
      {[...Array(6)].map((_, attempt) => (
        <div key={attempt} className="my-2 flex">
          {/* 시도한 자모 배열이 존재하면 해당 자모들을, 없으면 빈 셀을 보여줍니다 */}
          {[...Array(dosiLength)].map((_, index) => (
            <Cell key={index} inputJamo={attempts[attempt]?.[index] || ""} />
          ))}
        </div>
      ))}
    </div>
  );
}
