import { useState, useEffect, useMemo } from "react";
import data from "../../assets/data.json";
import GameGrid from "./GameGrid";
import { fisherYatesShuffle, LCG } from "../../lib/random";
import { jamo } from "../../lib/jamo";

function Game() {
  const [parsedData, setParsedData] = useState({ 시: [], 군: [], 구: [] });

  useEffect(() => {
    const removeSuffixAndCharacter = (name) => {
      // Remove the last character (suffix)
      return name.slice(0, -1);
    };
  
    const processedSi = data["시"].map(removeSuffixAndCharacter);
    const processedGun = data["군"].map(removeSuffixAndCharacter);
    const processedGu = data["구"].map(removeSuffixAndCharacter);

    // Now we categorize the processed data and set it to the state
    setParsedData({
      시: processedSi,
      군: processedGun,
      구: processedGu,
    });
  }, []); 

  // Combine 시 and 군 arrays (excluding 구)
  const combindDosiList = [...parsedData["시"], ...parsedData["군"]];
  // Calculate days since epoch
  const epochMs = new Date("September 12, 2024 00:00:00").valueOf();
  const now = Date.now();
  const msInDay = 86400000;
  const daysSinceEpoch = Math.floor((now - epochMs) / msInDay);

  // Use useMemo to shuffle the dosi list once per day based on the seed
  const shuffledDosi = useMemo(() => {
    const seed = daysSinceEpoch; // Use daysSinceEpoch as the seed
    const random = LCG(seed);
    return fisherYatesShuffle([...combindDosiList], random);
  }, [combindDosiList, daysSinceEpoch]);

  const todayDosi = shuffledDosi[0];
  console.log(typeof todayDosi);
  console.log(todayDosi)

  // Initialize todayDosiJamo outside the if block
  let todayDosiJamo = [];

  if (typeof todayDosi === 'string' && todayDosi.length > 0) {
    todayDosiJamo = jamo(todayDosi);
    console.log(todayDosiJamo);
  } else {
    console.error('todayDosi is not a valid string');
  }

  return (
    <div>
      <GameGrid dosiLength={todayDosiJamo.length} />
    </div>
  );
}

export default Game;
