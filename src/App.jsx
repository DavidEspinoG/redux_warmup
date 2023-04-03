import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './slices/counter';

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Learning redux</h1>
      <h2>Counter managed by redux</h2>
      <h3>Counter: {count}</h3>
      <button 
        onClick={() => {dispatch(increment())}}
      >Increment</button>
      <button
        onClick={() => {dispatch(decrement())}}
      >Decrement</button>
    </div>
  )
}

export default App
