import React from "react";
import backOfCard from "./back.png";
import useFlip from './hooks'
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isUp, toggleIsUp] = useFlip();

  return (
    <img
      src={isUp ? front : back}
      alt="playing card"
      onClick={toggleIsUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
