import cn from "../../lib/cn";
import { useState, useEffect } from "react";

function Cell({ inputJamo, userResult, jamoLength }) {
  const [cellSize, setCellSize] = useState("w-14 h-14");
  
  useEffect(() => {
    if (jamoLength === 7) {
      setCellSize("w-12 h-12");
    } else if (jamoLength === 8) {
      setCellSize("w-10 h-10");
    }
  }, [jamoLength]);

  // userResult에 따라 동적으로 클래스 이름 결정
  let baseClasses = cn(
    `${cellSize} md:w-20 md:h-20  border-solid border-2 flex items-center`,
    "justify-center mx-0.5 text-4xl font-bold rounded"
  );

  const getCellClass = () => {
    // userResult.matched 값에 따라 다른 클래스를 적용
    if (userResult.matched === 1) {
      return "bg-green-500 text-white border-green-500"; // 정답과 정확히 일치 (녹색)
    } else if (userResult.matched === 2) {
      return "bg-yellow-500 text-white border-yellow-500"; // 정답에 포함되지만 위치 다름 (노란색)
    } else {
      return "bg-slate-400 text-white border-slate-400"; // 정답에 포함되지 않음 (회색)
    }
  };

  return (
    <div className={cn(baseClasses, getCellClass())}>
      {inputJamo} {/* 개별 자모 표시 */}
    </div>
  );
}

export default Cell;
