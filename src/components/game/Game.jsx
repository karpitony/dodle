import { useState, useEffect, useMemo } from "react";
import data from "../../assets/data.json";
import GameGrid from "./GameGrid";
import { fisherYatesShuffle, LCG } from "../../lib/random";
import { jamo } from "../../lib/jamo";
import AnswerInput from "./AnswerInput";

function Game() {
  const [userInput, setUserInput] = useState("");
  const [parsedData, setParsedData] = useState({ 시: [], 군: [], 구: [] });
  const [jamoCount, setJamoCount] = useState(0);
  const [attempts, setAttempts] = useState([]); // 각 행의 입력을 저장
  const [currentAttempt, setCurrentAttempt] = useState(0); // 현재 몇 번째 시도인지 추적

  useEffect(() => {
    const removeSuffixAndCharacter = (name) => name.slice(0, -1);
  
    const processedSi = data["시"].map(removeSuffixAndCharacter);
    const processedGun = data["군"].map(removeSuffixAndCharacter);
    const processedGu = data["구"].map(removeSuffixAndCharacter);

    setParsedData({
      시: processedSi,
      군: processedGun,
      구: processedGu,
    });
  }, []); 

  const combindDosiList = useMemo(() => {
    return [...parsedData["시"], ...parsedData["군"]];
  }, [parsedData]);

  const epochMs = new Date("September 12, 2024 00:00:00").valueOf();
  const now = Date.now();
  const msInDay = 86400000;
  const daysSinceEpoch = Math.floor((now - epochMs) / msInDay);

  const shuffledDosi = useMemo(() => {
    const seed = daysSinceEpoch;
    const random = LCG(seed);
    return fisherYatesShuffle([...combindDosiList], random);
  }, [combindDosiList, daysSinceEpoch]);

  const todayDosi = shuffledDosi.length > 0 ? shuffledDosi[0] : undefined;
  console.log(todayDosi); // Debugging

  const todayDosiJamo = useMemo(() => {
    if (typeof todayDosi === 'string' && todayDosi.length > 0) {
      return jamo(todayDosi).flat(); // 2차원 배열을 1차원 배열로 변환
    }
    return [];
  }, [todayDosi]);

  useEffect(() => {
    if (todayDosiJamo.length > 0) {
      setJamoCount(todayDosiJamo.length); // 자모 개수를 업데이트
    }
  }, [todayDosiJamo]);

  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing || e.key !== "Enter") {
      return;
    }
    e.preventDefault();

    const letters = userInput;
    const lettersJamo = jamo(letters).flat(); // 자모를 1차원 배열로 변환

    if (lettersJamo.length !== jamoCount) {
      alert("자모 갯수가 맞지 않습니다.");
      return;
    }
    if (!combindDosiList.includes(letters)) {
      alert("데이터 목록에 없습니다. 다시한번 확인해주세요.");
      return;
    }

    // 입력한 값을 currentAttempt에 저장
    setAttempts((prevAttempts) => {
      const updatedAttempts = [...prevAttempts];
      updatedAttempts[currentAttempt] = lettersJamo; // 현재 줄에 1차원 자모 배열 저장
      return updatedAttempts;
    });

    setCurrentAttempt((prev) => prev + 1); // 다음 줄로 넘어가기
    setUserInput(""); // 입력 필드 초기화
  };

  const handleChange = (e) => {
    setUserInput(e.target.value); 
  };

  return (
    <div>
      {jamoCount > 0 && (
        <GameGrid attempts={attempts} dosiLength={jamoCount} />
      )}
      <AnswerInput
        value={userInput}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
    </div>
  );
}

export default Game;
