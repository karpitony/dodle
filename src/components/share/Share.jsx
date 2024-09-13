export default function Share({ userResults, show, seed, setModalOpen }) {
  const GREEN_BOX = "🟩";
  const YELLOW_BOX = "🟨";
  const GRAY_BOX = "⬜";

  function generateSummary() {
    let summary = `Dodle 결과 #${seed}\nhttps://dodle.vercel.app/\n`;
    userResults.forEach((userResult) => {
      userResult.forEach((letterInfo) => {
        switch (letterInfo.matched) {
          case 1:
            summary += GREEN_BOX;
            break;
          case 2:
            summary += YELLOW_BOX;
            break;
          default:
            summary += GRAY_BOX;
        }
      });
      summary += "\n"; // New line for each guess
    });
    return summary.trim(); // Remove the last new line
  }

  function shareResult() {
    const summary = generateSummary();
    navigator.clipboard.writeText(summary).then(
      () => {
        alert("Result copied to clipboard!");
      },
      (err) => {
        alert("Failed to copy result: ", err);
      }
    );
  }

  return (
    <>
      {show && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div
            className="bg-white flex flex-col w-[500px] p-4 rounded shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on click inside
          >
            <div>
              <p className="font-bold text-lg">Dodle 결과 공유</p>
              <p className="mt-2">아래 버튼을 클릭하여 결과를 복사하세요</p>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={shareResult}
            >
              결과 복사하기
            </button>
          </div>
        </div>
      )}
    </>
  );
}
