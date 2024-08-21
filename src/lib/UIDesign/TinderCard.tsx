"use client";
import { SetStateAction, useState } from "react";
import TinderCard from "react-tinder-card";
import "@/Css/card.css";

import CardUi from "./CardUi";
import { db } from "@/data/test";

const TinderCards = () => {
  const [lastDirection, setLastDirection] = useState();

  const swiped = ({
    direction,
    nameToDelete,
  }: {
    direction: string;
    nameToDelete: string;
  }) => {
    console.log("removing: " + nameToDelete);

    setLastDirection(direction as unknown as SetStateAction<undefined>);
  };

  const outOfFrame = (name: string) => {
    console.log(name + " left the screen!");
  };
  return (
    <div>
      <div className="cardContainer">
        {Array.isArray(db) &&
          db.map((item) => (
            <TinderCard
              className="swipe"
              key={item.title}
              onSwipe={(dir) =>
                swiped({ direction: dir, nameToDelete: item.title })
              }
              onCardLeftScreen={() => outOfFrame(item.title)}>
              <div>
                <CardUi item={item} />
              </div>
            </TinderCard>
          ))}
      </div>
    </div>
  );
};

export default TinderCards;
