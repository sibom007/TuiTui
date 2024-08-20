import { Controller, useFormContext } from "react-hook-form";

type Tprops = {
  name: string;
  label?: string;
  type?: string;
  className?: string;
  defaultValue?: string;
};

const CInput = ({
  name,
  label,
  type = "text",
  className,
  defaultValue = "",
}: Tprops) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => (
        <input className={className} {...field} type={type} name={name} />
      )}
    />
  );
};

export default CInput;
