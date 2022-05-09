import React from "react";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import data from "../data.json"
function Form(props) {
  return (
    <form className="form">
      <Input type={data.type} placeholder="Enter your email" />
      <Select/>
      <Button/>

    </form>
  );
}

export default Form;
