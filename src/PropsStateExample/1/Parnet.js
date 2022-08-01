import {Child} from "./Child";
import {useState} from "react";

export function Parent(props){
  const [param1, setParam1] = useState("Base example")

  return (
    <Child state={{param1, setParam1, constParam: "const param"}} >
      "Children"
    </Child>
  )
}
