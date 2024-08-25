"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import p from "../../../../../public/no-photo.png";
import { useLikedPropleQuery } from "@/Redux/api/SwipeProfile";
import { useUserId } from "@/hooks/GetId";
import { IUser } from "@/types";
import Loader from "@/lib/Loader/Loader";

const LikedParsonPage = () => {
  const id = useUserId();
  const { data, isFetching, isLoading } = useLikedPropleQuery({ id });
  const users = data?.data;

  return (
    <div className="min-h-[100vh] w-[80vw] text-white font-damion">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        {isLoading && isFetching ? <Loader /> : ""}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Age</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((item: IUser) => (
            <TableRow key={item.name}>
              <TableCell>
                <Image
                  src={item?.profile?.image || p}
                  alt="Profile Image"
                  width={50}
                  height={50}
                  className="rounded-full w-14 h-14"
                />
              </TableCell>
              <TableCell>{item?.name}</TableCell>
              <TableCell>{item?.email}</TableCell>
              <TableCell>{item?.profile?.age || 0}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LikedParsonPage;
