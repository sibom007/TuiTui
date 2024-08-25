"use client";
import { SetStateAction, useState } from "react";
import TinderCard from "react-tinder-card";
import "@/Css/card.css";

import CardUi from "./CardUi";
import { db } from "@/data/test";
import { useAllProfileQuery } from "@/Redux/api/SwipeProfile";
import { useUserId } from "@/hooks/GetId";
import { User } from "@prisma/client";
import { IUser } from "@/types";

const TinderCards = () => {
  const id = useUserId();
  const users = useAllProfileQuery({ id });
  const swiped = ({
    direction,
    nameToDelete,
  }: {
    direction: string;
    nameToDelete: string;
  }) => {
    if (direction === "right") {
      console.log("right");
    }
    if (direction === "left") {
      console.log("left");
    }
  };

  const outOfFrame = (name: string) => {
    // console.log(name + " left the screen!");
  };
  return (
    <div>
      <div className="cardContainer">
        {users?.data?.data.map((item: IUser) => (
          <TinderCard
            className="swipe"
            key={item.name}
            onSwipe={(dir) => swiped({ direction: dir, nameToDelete: item.id })}
            onCardLeftScreen={() => outOfFrame(item.id)}>
            <div>
              <CardUi
                item={{
                  name: item.name || "",
                  image: item.profile?.image || "",
                }}
              />
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
