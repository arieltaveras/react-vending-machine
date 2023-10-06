import React, { useState } from "react";
import ChipPosition from "./ChipPosition";
import Chips from "./Chips";

function getRandom(min = 0, max = 100) {
  return Math.random() * (max - min) + min;
}

function ChipBags() {
  const [chips, setChips] = useState([]
    );
    const addChips = (img) => {
        setChips(chips => [...chips, {img, x: getRandom(), y: getRandom()}])
    }
  return (
    <div>
      <Chips addChips={addChips} />
      {chips.map(({ x, y }) => (
        <ChipPosition x={x} y={y} />
      ))}
    </div>
  );
};

export default ChipBags;