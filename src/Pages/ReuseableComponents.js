import React from "react";
import FormItem from "../components/FormItem";

const ReuseableComponents = () => {
  return (
    <div>
      <FormItem label="Name" inline />
      <FormItem label="Email" inline={false} />
    </div>
  );
};

export default ReuseableComponents;
