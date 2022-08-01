import {useState} from "react";
import {Parent} from "./Parent";

export function GrandParent(props){
  const [grandParam, setGrandParam] = useState("example 6 Grandparent param")

  return (
    <Parent state={{grandParam, setGrandParam}} />
  )
}