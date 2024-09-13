import cn from "../../lib/cn";

export default function AnswerInput({ value, onKeyDown, onChange }) {
  return (
    <div className="mt-12 flex justify-center">
      <input
        type="text"
        placeholder="추측한 시/군 이름을 입력해주세요."
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        className={cn(
          "flex justify-center border border-slate-500 px-4 py-2 rounded-sm",
          "w-full text-center text-lg focus:outline-none border-t-0 border-x-0",
          "border-b-2 border-slate-300 focus:border-green-500"
        )}
        style={{
          // animation: "ripple 0.5s forwards ease-in-out",
          transition: "border-color 0.2s ease-in-out",
        }}
      />
    </div>
  );
}
