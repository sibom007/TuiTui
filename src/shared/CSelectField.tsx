import { Controller, useFormContext } from "react-hook-form";
type Tprops = {
  name: string;
  label?: string;
  items: string[];
  className?: string;
  required?: boolean;
};

const CSelectField = ({ items, name, label, required, className }: Tprops) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <select {...field} id={name} className={className} required={required}>
          <option className="bg-[#ff6666] font-damion mb-3" value="">
            Select one
          </option>
          {items.map((item) => (
            <option
              className=" bg-[#ff6666] text-md text-white font-damion"
              key={item}
              value={item}>
              {item}
            </option>
          ))}
        </select>
      )}
    />
  );
};

export default CSelectField;
