import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>INCREASE</button>
      <button onClick={() => dispatch(decrement())}>DECREASE</button>

      {isLogged ? <h3>Valuable data</h3>: "Please log in"}
    </div>
  );
}

export default App;
