import React from "react";
import Card from "../Card/Card";

function CardList({ robots }) {
  return (
    <div>
      {robots.map((item, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            username={robots[i].username}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
}

export default CardList;
