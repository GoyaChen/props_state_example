export function Child(props){
  const{grandParam, setGrandParam1, parentParam, setParentParam} = props.state

  return `${grandParam}\n${parentParam}`;
}
