import Input from "@/components/Input/Input";
import React from "react";

function SigninForm() {
  return (
    <div className="px-[142px] flex gap-4 flex-col pt-90 h-screen items-center">
      <h1 className="mb-1 bg-clip-text text-transparent text-55 font-bold bg-blue-gradient">
        sign in
      </h1>
      <Input label={"Email"} className={``} />
      <Input label={"Password"} type={"password"} className={`w-full`} />
    </div>
  );
}

export default SigninForm;
