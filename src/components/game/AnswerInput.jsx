import cn from "../../lib/cn";
import { AiOutlineEnter } from "react-icons/ai";

export default function AnswerInput({ value, onKeyDown, onChange }) {
  const handleButtonClick = () => {
    // 'Enter' keydown event 생성
    const enterKeyDownEvent = new KeyboardEvent('keydown', {
      key: 'Enter',
      keyCode: 13, // Enter key code
      code: 'Enter',
      which: 13,
      bubbles: true
    });

    // 실제로 input에서 'Enter' keydown 이벤트를 발생시킴
    document.querySelector('input').dispatchEvent(enterKeyDownEvent);
  };
  return (
    <div className="mt-12 flex justify-center">
      <input
        type="text"
        placeholder="추측한 시/군/구 이름을 입력해주세요."
        value={value}
        onKeyDown={onKeyDown}
        onChange={onChange}
        className={cn(
          "flex justify-center border border-slate-500 px-4 py-2 rounded-sm",
          "text-center text-lg focus:outline-none border-t-0 border-x-0",
          "border-b-2 border-slate-300 focus:border-blue-500",
          "w-80 md:w-full"
        )}
        style={{
          // animation: "ripple 0.5s forwards ease-in-out",
          transition: "border-color 0.2s ease-in-out",
        }}
      />
      <button
        className={cn(
          "ml-2 px-4 py-0.5 bg-blue-500 text-white rounded",
          "md:hidden text-center"
        )}
        onClick={handleButtonClick}
      >
        <AiOutlineEnter />
      </button>
    </div>
  );
}
