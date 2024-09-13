import Cell from "./Cell";

export default function ({ dosiLength }) {
  return (
    <>
      {[...Array(6)].map((_, attempt) => (
        <div key={attempt} className="my-2 flex">
          <Cell dosiLength= {dosiLength} />
        </div>
      ))}
    </>
  );
}