import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Chips.css";
import Counter from "./Counter";

function getRandom(min = 0, max = 100) {
    return Math.random() * (max - min) + min;
  }

function Chips() {
    const handleClick = e => {
        
    }
    
    const img = "https://m.media-amazon.com/images/I/61kqu+H+QaL._SL1122_.jpg"

    const [chips, setChips] = useState([]
        );

    const addChips = () => {
        setChips(chips => [...chips, {img, x: getRandom(), y: getRandom()}])
    }

    return (
        <div>
          <Counter />
          <Link to="/">GO BACK</Link>
          <img className="ChipsImg"
            src={img}
            onClick={addChips}
          />
        </div>
      );
}

export default Chips;

