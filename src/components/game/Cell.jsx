function Cell({ inputJamo }) {
  return (
    <div
      className="border border-slate-500 rounded w-20 h-20 text-center flex items-center justify-center"
    >
      {inputJamo} {/* 개별 자모 표시 */}
    </div>
  );
}

export default Cell;
