import cn from "../../lib/cn";

export default function Share({ userResults, show, seed }) {
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

  function isCorrect() {
    return userResults.some((userResult) => {
      return userResult.every((letterInfo) => letterInfo.matched === 1);
    });
  }

  return (
    <>
      {show && (
        <div
          style={{ transition: "all 0.5s ease", animation: "modalOpen 0.3s" }}
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
        >
          <div
            className="bg-white flex flex-col w-[500px] p-4 rounded shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on click inside
          >
            <div
              className={cn(
                "text-center mb-8 text-2xl font-bold",
                isCorrect() ? "text-green-500" : "text-red-500"
              )}
            >
              {isCorrect() ? "맞았습니다!" : "틀렸습니다"}
            </div>
            <div>
              <p className="font-bold text-lg">Dodle 결과 공유</p>
              <p className="mt-2">아래 버튼을 클릭하여 결과를 복사하세요</p>
            </div>
            <div className="flex justify-center gap-4 items-center mt-8">
              <button
                className="max-w-32 w-full h-fit px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                onClick={shareResult}
              >
                결과 복사하기
              </button>
              {!isCorrect() && (
                <button
                  className="px-4 w-full py-2 max-w-32 h-fit border-2 rounded"
                  onClick={(e) => window.location.reload()}
                >
                  다시하기
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
