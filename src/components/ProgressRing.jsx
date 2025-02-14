/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

export default function ProgressRing() {
  const [progress, setProgress] = useState(0);
  const targetProgress = Math.floor(Math.random() * (97 - 88 + 1)) + 88; // Random between 88 and 97

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      if (currentProgress >= targetProgress) {
        clearInterval(interval);
      }
      setProgress(currentProgress);
    }, 20); // Adjust speed here (lower = faster)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        {/* Background Circle */}
        <circle
          className="text-gray-300"
          stroke="currentColor"
          strokeWidth="10"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
        />
        {/* Progress Circle */}
        <circle
          className="text-green-500 transition-all"
          stroke="currentColor"
          strokeWidth="10"
          fill="transparent"
          r="40"
          cx="50"
          cy="50"
          strokeDasharray="251.2"
          strokeDashoffset={251.2 - (251.2 * progress) / 100}
          strokeLinecap="round"
        />
      </svg>
      {/* Percentage Text */}
      <span className="absolute text-3xl ml-2 font-bold text-green-700">
        {progress}%
      </span>
    </div>
  );
}
