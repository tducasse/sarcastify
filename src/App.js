import {useState} from 'react';
import './App.css';

function App() {
  const [converted, setConverted] = useState("")
  const [original, setOriginal] = useState("")

  const handleChange = (e) => {
    setOriginal(e.target.value)
    setConverted(e.target.value.split('').map(e => Math.random() > 0.5 ? e.toLowerCase() : e.toUpperCase()).join(''))
  }

  const copy = () => {
    const r = document.createRange();
    r.selectNode(document.getElementById("converted"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }

  return (
    <div className="App">
      <textarea value={original} onChange={handleChange}/>
      <button onClick={copy}>Copy</button>
      <div id="converted">{converted}</div>
    </div>
  );
}

export default App;
