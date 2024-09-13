import React, { useEffect, useState, useMemo } from "react";
import HowToPlay from "./components/how-to-play/HowToPlay";
import data from "./assets/data.json";

// Function to generate a daily seed-based random number
function LCG(seed) {
  return function () {
    seed = (seed * 1879 + 1013904223) % 65536;
    return seed / 65536;
  };
}

function fisherYatesShuffle(array, randomFunc) {
  let i, j, temp;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(randomFunc() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function App() {
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
  console.log(todayDosi);

  return (
   <div>
    <div align="center">
      <p className="text-2xl bold border border-slate-600 rounded">🌁 Dodle</p>
    </div>
    <HowToPlay />

    <a
        href="https://github.com/karpitony/dodle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="h-10" src="src/assets/github-mark.png" alt="GitHub" />
      </a>
   </div>
  )
}

export default App;
