import React, { useState } from "react";
import styled from "styled-components";
import { Frame, useCycle } from "framer";
import diceThumbnail from "../assets/dice.png";
import dice1 from "../assets/dice-1_3s.png";
import dice5 from "../assets/dice-5_3s.png";
import dice6 from "../assets/dice-6_3s.png";

export function Dice() {
  const results = [dice1, dice5, dice6];
  const [currentDice, setDice] = useState(2);
  function rollDice() {
    setDice(Math.floor(Math.random() * 3));
  }
  return (
    <Frame
      opacity={0}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      onTap={() => rollDice()}
      center
      image={results[currentDice]}
    />
  );
}

export default function EmojiPanel() {
  return (
    <Frame
      width="100%"
      bottom={0}
      backgroundColor="rgba(34,34,34,0.95)"
      style={{ zIndex: 100 }}
    >
      <Dice />
      <img src={diceThumbnail} width="30%" />
    </Frame>
  );
}
