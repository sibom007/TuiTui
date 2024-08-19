import {
  Card as CardComponent,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db, dummyUsers } from "@/data/test";
import Image from "next/image";
import TinderCard from "react-tinder-card";

const Card = ({
  title,
  age,
  gender,
  image,
  discription,
  footer,
}: {
  title: string;
  age: string;
  gender: string;
  image: string;
  discription: string;
  footer: string;
}) => {
  return (
    <div>
      {db.map((character, index) => (
        <div key={character.title}>
          <TinderCard className="swipe">
            <div className="card">
              <h3>{character.title}sdfjskldjfksdkfkj</h3>
            </div>
          </TinderCard>
        </div>
      ))}
      {/* <TinderCard>
        <CardComponent className="bg-[#ff6666] border-none rounded-md text-gray-200">
          <CardHeader>
            <Image src={image} width={300} height={400} alt="hello" />
            <CardTitle className="text-xl ">{title}</CardTitle>
            <CardDescription className="text-gray-200">
              {discription}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row justify-between">
              <p>Age: {age}</p>
              <p>Gender: {gender}</p>
            </div>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </CardComponent>
      </TinderCard> */}
    </div>
  );
};

export default Card;
