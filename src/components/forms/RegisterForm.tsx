"use client";
import { Spinner } from "@/components/common";
import { Input } from "@/components/forms";
import { useRegister } from "@/hooks";

export default function RegisterForm() {
  const {
    first_name,
    last_name,
    email,
    userName,
    password,
    re_password,
    isLoading,
    onChange,
    onSubmit,
  } = useRegister();

  const config = [
    {
      labelText: "First name",
      labelId: "first_name",
      type: "text",
      value: first_name,
      required: true,
    },
    {
      labelText: "Last name",
      labelId: "last_name",
      type: "text",
      value: last_name,
      required: true,
    },
    {
      labelText: "Email address",
      labelId: "email",
      type: "email",
      value: email,
      required: true,
    },
    {
      labelText: "UserName",
      labelId: "userName",
      type: "text",
      value: userName,
      required: true,
    },
    {
      labelText: "Password",
      labelId: "password",
      type: "password",
      value: password,
      required: true,
    },
    {
      labelText: "Confirm password",
      labelId: "re_password",
      type: "password",
      value: re_password,
      required: true,
    },
  ];

  return (
    <form
      className="w-full flex flex-col items-center justify-center"
      onSubmit={onSubmit}
    >
      <div className="w-full grid grid-cols-2 gap-y-4 gap-x-8">
        {config.map((input) => (
          <Input
            className="w-full"
            key={input.labelId}
            labelId={input.labelId}
            type={input.type}
            onChange={onChange}
            value={input.value}
            link={input.link}
            required={input.required}
          >
            {input.labelText}
          </Input>
        ))}
      </div>

      <div className="pt-6 w-full">
        <button
          type="submit"
          className="w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={isLoading}
        >
          {isLoading ? <Spinner sm /> : "Sign up"}
        </button>
      </div>
    </form>
  );
}
