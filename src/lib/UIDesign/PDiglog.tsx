import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { useUserId } from "@/hooks/GetId";
import { useChangePasswordMutation } from "@/Redux/api/ChangePassword";
import CForm from "@/shared/CFrom";
import CInput from "@/shared/CInput";
import { FieldValues } from "react-hook-form";
import toast from "react-hot-toast";

const PDiglog = () => {
  const id = useUserId();
  const [ChangePassword] = useChangePasswordMutation();

  const handlePassowrd = async (data: FieldValues) => {
    const Info = {
      id: id,
      currentpass: data.currentpass,
      newPass: data.newPass,
    };
    const res = await ChangePassword(Info);
    if (res.data?.statusCode === 500) {
      toast.error(res.data?.message, { position: "top-right" });
    }
    if (res.data?.status === 200) {
      toast.success(res.data?.data, { position: "top-right" });
    }
  };

  return (
    <Dialog>
      <DialogTrigger>Change Password</DialogTrigger>
      <DialogContent className="bg-white">
        <DialogTitle>Change Password</DialogTitle>
        <CForm resetAfterSubmit={true} onSubmit={handlePassowrd}>
          <div className="flex  gap-2">
            <CInput
              name="currentpass"
              type="text"
              placeholder="Enter current Pass"
              className="bg-white outline-none flex-1 border-2 p-2 rounded-md"
            />
            <CInput
              name="newPass"
              type="text"
              placeholder="Enter your number"
              className="bg-white outline-none flex-1 border-2 p-2 rounded-md"
            />
          </div>
          <DialogClose
            type="submit"
            className="bg-[#ff6666] w-full border-gray-600 border-2 p-2 rounded-lg font-damion text-zinc-100 font-semibold">
            Edit
          </DialogClose>
        </CForm>
      </DialogContent>
    </Dialog>
  );
};

export default PDiglog;
