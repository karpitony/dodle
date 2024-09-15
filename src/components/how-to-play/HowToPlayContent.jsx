import infoPng from "../../assets/info.png";

export default function HowToPlayContent() {
  return (
    <>
      <p className="font-bold text-lg mb-3.5">
        도들은 한국 도시 이름 워들 게임입니다!
      </p>
      <p className="mt-2">
        게임 방법은 간단합니다. 정답을 맞추기 위해 시/군/구의 이름을 한 단어씩 입력하면서 정답을 찾아보세요.
      </p>
      <p className="mt-2">
        - 답이 '장수'인 경우 '서울'을 입력하면 아래와 같이 표시됩니다.
      </p>
      <img className="my-5" src={infoPng} alt="게임 설명 이미지" />
      <p className="mt-2 flex gap-1 flex-wrap items-center">
        - 입력한 단어의 자모가 정답 자모에 포함되어 있지만, 위치가 다르면 
        <span className="bg-yellow-500 font-bold text-white p-1 rounded-sm">노란색</span>
      </p>
      <p className="mt-2 flex gap-1 flex-wrap items-center">
        - 정답 자모에 포함되어 있고, 위치도 같으면 
        <span className="bg-green-500 font-bold text-white p-1 rounded-sm">초록색</span>으로 표시됩니다.
      </p>
      <p className="mt-2">
        - 정답은 매일 밤 자정에 업데이트 됩니다.
      </p>
      <p className="my-2 flex gap-1">
        - 어떤 데이터가 들어있는지 궁금하면 
        <a className="underline text-blue-500 font-bold" href="https://raw.githubusercontent.com/karpitony/dodle/main/src/assets/data.json" target="_blank">
          여기
        </a>
        를 클릭하세요.
      </p>
    </>
  );
}
