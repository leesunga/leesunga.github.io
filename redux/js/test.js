import {createStore} from "Redux";

const initData = {
  counter: 0
};
  
const reducer = (state = initData, action) => {
  switch (action.type) {
    case 'UP':
      Object.assign(state, {counter: state.counter + action.value});
      break;
    case 'DOWN':
      Object.assign(state, {counter: state.counter - action.value});
      break;
  }
  return state;
}

const store = createStore(reducer);

const elCounter = document.querySelector('input');
const render = () => {
  console.log(store.getState());
  elCounter.value = store.getState().counter;
};

store.subscribe(render);

const test = () => {
  
  document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      store.dispatch({ type: btn.getAttribute('data-role'), value: 1});
    });
  });

};

export default test;