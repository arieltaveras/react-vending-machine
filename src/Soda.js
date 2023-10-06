import React from "react";
import { Link } from "react-router-dom";

function Soda() {
    return (
        <div>
          <h1>OMG SUGARRRRR</h1>
          <Link to="/">GO BACK</Link>
          <img
            src="https://media3.giphy.com/media/dRYBjtthrSEEg/giphy.gif?cid=ecf05e47cpt02fsysmfmrzywa5zm1lqo2bky285zy343n6qa&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt="Original Fanta, Coca-cola, and Sprite bottle lids popping."
          />
        </div>
      );
}

export default Soda;