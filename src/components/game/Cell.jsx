function Cell({ inputJamo, userResult }) {
  // userResult에 따라 동적으로 클래스 이름 결정
  const getCellClass = () => {
    let baseClasses = "w-20 h-20 border-solid border-2 flex items-center justify-center mx-0.5 text-2xl font-bold rounded";

    // userResult.matched 값에 따라 다른 클래스를 적용
    if (userResult.matched === 1) {
      return `${baseClasses} bg-green-500 text-white border-green-500`;  // 정답과 정확히 일치 (녹색)
    } else if (userResult.matched === 2) {
      return `${baseClasses} bg-yellow-500 text-white border-yellow-500`;  // 정답에 포함되지만 위치 다름 (노란색)
    } else {
      return `${baseClasses} bg-slate-400 text-white border-slate-400`;  // 정답에 포함되지 않음 (회색)
    }
  };

  return (
    <div className={getCellClass()}>
      {inputJamo} {/* 개별 자모 표시 */}
    </div>
  );
}

export default Cell;
