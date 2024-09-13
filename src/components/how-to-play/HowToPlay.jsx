import { useState } from "react";
import HowToPlayContent from "./HowToPlayContent";

function HowToPlay() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex justify-center mt-5">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setModalOpen(true)}
      >
        How to Play
      </button>

      {modalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
          onClick={(e) => {
            setModalOpen(false);
          }}
        >
          <div className="bg-white flex flex-col w-[500px] p-4 rounded shadow-lg">
            <div>
              <HowToPlayContent />
            </div>

            <div className="flex justify-center">
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
                align="center"
                onClick={() => setModalOpen(false)}
              >
                설명창 닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HowToPlay;
