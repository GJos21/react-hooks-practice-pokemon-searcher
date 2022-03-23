import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ mon }) {
  const { name, hp, sprites } = mon;
  const [flipCard, setFlipCard] = useState(true);

  return (
    <Card>
      <div >
        <div className="image">
          <img
            src={flipCard ? sprites["front"] : sprites["back"]}
            alt="oh no!"
            onClick={() => setFlipCard(!flipCard)}
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
