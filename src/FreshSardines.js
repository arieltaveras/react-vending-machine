import React from "react";
import { Link } from "react-router-dom";

function FreshSardines() {
    return (
        <div>
          <h1>YOU DON'T EAT THE SARDINES. THE SARDINES, THEY EAT YOU!</h1>
          <Link to="/">GO BACK</Link>
          <img
            src="https://media1.giphy.com/media/3ovY59qEyV1K5OwVYn/giphy.gif?cid=ecf05e47g82e21238hu2y01s6p2quidogwvqata664ordx5l&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt="School of sardines opening their mouths."
          />
        </div>
      );
}

export default FreshSardines;