export function Child(props){
  //You are not necessary to get all the params from state, and you can rename it
  const{param1: myParam} = props.state

  return myParam;
}
