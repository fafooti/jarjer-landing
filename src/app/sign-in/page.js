import SigninForm from "@/modules/Signin/SigninForm";
import TitleContainer from "@/modules/Signin/TitleContainer";
import React from "react";
import TimeRangeTabs from "@/modules/TimeRangeTabs";

function Signin() {
  return (
    <div className="flex overflow-hidden">
      <TimeRangeTabs />
    </div>
  );
}

export default Signin;
