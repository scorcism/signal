
import './App.css'
import { effect, signal } from '@preact/signals-react';

const count = signal(0);

const getOrCreate = () => {
  const storedValue = localStorage.getItem("counts");
  if (storedValue !== null) {
    return parseInt(storedValue);
  } else {
    localStorage.setItem("counts", 0);
    return 0;
  }
};

effect(()=>{
  count.value  = getOrCreate();
})

function App() {

  const updateSignalCount = () =>{
    count.value++;
    localStorage.setItem("counts", count.value);
  }

  const keyDown = (e:any)=>{
    if(e.Key == "Enter"){
      count.value++;
    }
  }
  
  return (
    <div>
      <h1>{count.value}</h1>
      <button onKeyUp={keyDown} onClick={updateSignalCount}>click</button>
    </div>
  )
}

export default App
