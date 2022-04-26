import React, { useState } from "react";

function useFlip() {
  // call useState, "reserve piece of state"
  const [isFlipped, setIsFlipped] = useState(true);
  const flipCard = () => {
    setIsFlipped(isFlipped => !isFlipped);
  };
  
  // return piece of state AND a function to toggle it
  return [isFlipped, flipCard];
}

export default useFlip;