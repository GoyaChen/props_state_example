import {Child} from "./Child";
import {useState} from "react";

export function Parent(props){
  const [param1, setParam1] = useState("example 2")

  return (
    <Child state={{param1, setParam1}} />
  )
}
