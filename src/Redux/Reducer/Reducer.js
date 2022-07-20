const reducerFn = ( state = {counter: 0} , action) =>{
  if ((action.type === 'INCREMENT') && state.counter >= 0) {
    return { counter: state.counter + 1 };
  }
  
  if ((action.type === 'DECREMENT') && state.counter > 0) {
    return { counter: state.counter - 1};
  }
  if ((action.type === 'addByTen')){
    return {counter: state.counter + 10}
  }
  if ((action.type === 'subByTen') && state.counter > 10){
    return {counter: state.counter - 10}
  }
  return state;
}

export default reducerFn;