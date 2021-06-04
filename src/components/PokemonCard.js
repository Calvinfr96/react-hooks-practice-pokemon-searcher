import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, hp, frontSprite, backSprite }) {
  const [clicked, setClicked] = useState(false);
  function toggleSprite() {
    setClicked(!clicked)
  }
  return (
    <Card>
      <div>
        <div className="image" onClick={toggleSprite} >
          <img src={clicked ? backSprite : frontSprite} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
