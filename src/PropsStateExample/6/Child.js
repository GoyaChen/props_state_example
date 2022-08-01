export function Child(props){
  const{grandParam, setGrandParam1, parentParam1, setParentParam1, parentParam2, setParentParam2} = props.state

  return `${grandParam}\n${parentParam1}\n${parentParam2}`;
}
