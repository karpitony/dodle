import Cell from "./Cell";

export default function GameGrid({ dosiLength }) {
  return (
    <div className="flex flex-col justify-center items-center">
      {[...Array(6)].map((_, attempt) => (
        <div key={attempt} className="my-2 flex">
          {/* dosiLength에 맞는 가로 칸 생성 */}
          {[...Array(dosiLength)].map((_, index) => (
            <Cell key={index} />
          ))}
        </div>
      ))}
    </div>
  );
}
