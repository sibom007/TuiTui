"use client";
import TinderCard from "react-tinder-card";
import "@/Css/card.css";
import CardUi from "./CardUi";
import {
  useAllProfileQuery,
  useSwipeLeftMutation,
  useSwipeRightMutation,
} from "@/Redux/api/SwipeProfile";
import { useUserId } from "@/hooks/GetId";
import { IUser } from "@/types";
import toast from "react-hot-toast";

const TinderCards = () => {
  const id = useUserId();
  const users = useAllProfileQuery({ id });
  const [SwipeRight] = useSwipeRightMutation();
  const [SwipeLeft] = useSwipeLeftMutation();

  const swiped = async ({
    direction,
    IdToDelete,
  }: {
    direction: string;
    IdToDelete: string;
  }) => {
    if (direction === "right") {
      const Info = {
        id: id,
        likedUserId: IdToDelete,
      };
      const res = await SwipeRight(Info);
      if (res.data.status === 200) {
        toast.success(res?.data?.data, {
          position: "top-right",
        });
      }
    }

    if (direction === "left") {
      const Info = {
        id: id,
        DisLikeUserId: IdToDelete,
      };
      const res = await SwipeLeft(Info);
      if (res.data.status === 200) {
        toast.success(res?.data?.data, {
          position: "top-right",
        });
      }
    }
  };

  const outOfFrame = (name: string) => {
    // console.log(name + " left the screen!");
  };
  return (
    <div>
      <div className="cardContainer">
        {users?.data?.data?.map((item: IUser) => (
          <TinderCard
            className="swipe"
            key={item.name}
            onSwipe={(dir) => swiped({ direction: dir, IdToDelete: item.id })}
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
