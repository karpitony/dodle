import { useState } from 'react'
import HowToPlay from "./components/how-to-play/HowToPlay";

function App() {
  
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
