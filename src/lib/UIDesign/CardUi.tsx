import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardUi = ({
  item,
}: {
  item: {
    name: string;
    image: string;
  };
}) => {
  return (
    <div>
      <Card
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-[55vw] md:w-[40vw] lg:w-[24vw] h-[60vw] md:h-[40vw] lg:h-[24vw] ">
        <div className="absolute inset-0 p-4 flex  justify-end items-end  text-white">
          <CardTitle className="font-damion">{item.name}</CardTitle>
        </div>
      </Card>
    </div>
  );
};

export default CardUi;
