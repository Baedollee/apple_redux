import React from 'react';
import { createStore } from 'redux';
import { Provider,useSelector } from 'react-redux';


const reducer(state, action){
  return state
}
const initialState = {value:0}
const store = createStore(reducer, initialState)

const Counter = () => {
  const count = useSelector(state=>state.value)
  return (
    <div>
      <button>+</button>{count}
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
