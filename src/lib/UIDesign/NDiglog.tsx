"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { countryCodes } from "@/data/test";
import { useUpdateprofileMutation } from "@/Redux/api/profile";
import CForm from "@/shared/CFrom";
import CInput from "@/shared/CInput";
import CSelectField from "@/shared/CSelectField";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";
import { FaPencilAlt } from "react-icons/fa";

const Diglog = ({ id }: { id: string }) => {
  const [Updateprofile] = useUpdateprofileMutation();
  const handleNumber = async (data: FieldValues) => {
    const Info = {
      id: id,
      number: data.code + data.number,
    };
    const res = await Updateprofile(Info);
    toast.success(res?.data?.data?.message, { position: "top-right" });
  };
  return (
    <Dialog>
      <DialogTrigger>
        <FaPencilAlt />
      </DialogTrigger>
      <DialogContent className="bg-white">
        <DialogTitle>Enter Number</DialogTitle>
        <CForm resetAfterSubmit={true} onSubmit={handleNumber}>
          <div className="flex border-2 p-2 bg-white rounded-md">
            <CSelectField
              className="outline-none bg-white"
              name="code"
              items={countryCodes}
              required
            />
            <CInput
              name="number"
              type="text"
              placeholder="Enter your number"
              className="bg-white outline-none flex-1"
            />
          </div>
          <DialogClose
            type="submit"
            className="bg-[#ff6666] border-gray-600 border-2 p-2 rounded-lg font-damion text-zinc-100 font-semibold">
            Edit
          </DialogClose>
        </CForm>
      </DialogContent>
    </Dialog>
  );
};

export default Diglog;
