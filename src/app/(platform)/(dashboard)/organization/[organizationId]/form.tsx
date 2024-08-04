"use client";

import { Button } from "@/components/ui/button";
import { create } from "../../../../../../actions/create-board";
import { useFormState } from "react-dom";
import { FormInput } from "./form-input";
import { FormButton } from "./form-button";

export const Form = () => {
  const intialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(create, intialState);
  return (
    <form action={dispatch}>
      <div className="flex flex-col space-y-2">
        <FormInput errors={state?.errors} />
      </div>
      <FormButton />
    </form>
  );
};
