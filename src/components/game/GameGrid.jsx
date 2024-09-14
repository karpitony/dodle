import React from "react";
import Cell from "./Cell";

export default function GameGrid({ attempts, dosiLength, userResult }) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      {[...Array(6)].map((_, attempt) => (
        <div key={attempt} className="flex">
          {/* 시도한 자모 배열이 존재하면 해당 자모들을, 없으면 빈 셀을 보여줍니다 */}
          {[...Array(dosiLength)].map((_, index) => (
            <Cell
              key={index}
              inputJamo={attempts[attempt]?.[index] || ""}
              userResult={userResult[attempt]?.[index] || { matched: 0 }} // userResult 값 전달
              jamoLength={dosiLength}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
