import React from "react";
import Checkbox from "./Checkbox";
import data from "../data.json"




function Select() {
  return (
    <select>
    <Checkbox value={data.domain[0]}/>
    <Checkbox value={data.domain[1]}/>
    <Checkbox value={data.domain[2]}/>
    <Checkbox value={data.domain[3]}/>
    <Checkbox value={data.domain[4]}/>
    <Checkbox value={data.domain[5]}/>
    <Checkbox value={data.domain[6]}/>
    </select>

  );

}

export default Select;
