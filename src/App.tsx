
import { useEffect, useState } from 'react'
import './App.css'
import { Signal } from '@preact/signals';

function App() {

  let initialCount = 0;

  const [count, setCount] = useState<number>(initialCount);


  const updateCount = () => {
    setCount(count + 1);
    localStorage.setItem("counts", count.toString());
  }


  const getOrCreate = () => {
    const storedValue = localStorage.getItem("counts");
    if (storedValue !== null) {
      return parseInt(storedValue);
    } else {
      localStorage.setItem("counts", 0);
      return 0;
    }
  };

  useEffect(() => {
    let initial = getOrCreate();
    setCount(initial);
  }, [])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={updateCount}>click</button>
    </div>
  )
}

export default App
