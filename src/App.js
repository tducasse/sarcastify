import {useState} from 'react';
import './App.css';

function App() {
  const [converted, setConverted] = useState("")
  const [original, setOriginal] = useState("")

  const handleChange = (e) => {
    setOriginal(e.target.value)
    setConverted(e.target.value.split('').map(e => Math.random() > 0.5 ? e.toLowerCase() : e.toUpperCase()).join(''))
  }

  return (
    <div className="App">
      <textarea value={original} onChange={handleChange}/>
      <div>{converted}</div>
    </div>
  );
}

export default App;
