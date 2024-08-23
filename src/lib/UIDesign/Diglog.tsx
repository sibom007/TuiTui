import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useUpdateBackgroundColourMutation } from "@/Redux/api/profile";
import CForm from "@/shared/CFrom";
import CInput from "@/shared/CInput";
import toast from "react-hot-toast";
import { FaPencilAlt } from "react-icons/fa";

const Diglog = ({ id }: { id: string | undefined }) => {
  const [UpdateBackgroundColour] = useUpdateBackgroundColourMutation();
  const handlecolour = async (data: any) => {
    const Info = {
      id: id,
      colour: data.colour,
    };
    const res = await UpdateBackgroundColour(Info);
    toast.success(res?.data?.data?.message, { position: "top-right" });
  };
  return (
    <Dialog>
      <DialogTrigger>
        <FaPencilAlt />
      </DialogTrigger>

      <DialogContent className="bg-white">
        <DialogTitle>Choose the colour</DialogTitle>
        <CForm resetAfterSubmit={true} onSubmit={handlecolour}>
          <CInput name="colour" type="color" className="w-full " />
          <DialogClose
            type="submit"
            className="bg-[#ff6666] border-gray-600 border-2 p-2 rounded-lg font-damion text-zinc-100 font-semibold">
            Submit
          </DialogClose>
        </CForm>
      </DialogContent>
    </Dialog>
  );
};

export default Diglog;
