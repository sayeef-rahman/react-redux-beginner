import { useSelector, useDispatch } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  // console.log(counter);
  // console.log();
  const increment = () =>{
    dispatch({
      type: 'INCREMENT'
    });
  }
  const decrement = () => {
    dispatch({
      type: 'DECREMENT'
    })
  }

  const addByTen = () =>{
    dispatch({
      type: 'addByTen',
      payload: 10
    })
  }

  const subByTen = () =>{
    dispatch({
      type: 'subByTen',
      payload: 10
    })
  }
  return (
    <div className='counter-app'>
      <h1>Counter App</h1>
      <h1>{counter}</h1>
      <button className='btn' onClick={increment}>+</button>
      <button className='btn' onClick={decrement}>-</button>
      <button className='btn' onClick={addByTen}>ADD 10</button>
      <button className='btn' onClick={subByTen}>SUB 10</button>
    </div>
  );
}

export default App;
