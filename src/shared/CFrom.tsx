import React from "react";
import {
  useForm,
  FieldValues,
  FormProvider,
  SubmitHandler,
} from "react-hook-form";

type TFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  resetAfterSubmit: boolean;
};

const CForm = ({
  children,
  onSubmit,
  resetAfterSubmit = false,
}: TFormProps) => {
  const methods = useForm();

  const submit: SubmitHandler<FieldValues> = (data: any) => {
    onSubmit(data);
    if (resetAfterSubmit) {
      methods.reset();
    }
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)} className="space-y-3">
        {children}
      </form>
    </FormProvider>
  );
};

export default CForm;
