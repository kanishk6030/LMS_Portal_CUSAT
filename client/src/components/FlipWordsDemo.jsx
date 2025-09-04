import React from "react";
import { FlipWords } from "./ui/flip-words";
 
export function FlipWordsDemo() {
  const words = ["CUSAT", "CUCEK"];
 
  return (
        <FlipWords words={words} className=""/>
  );
}