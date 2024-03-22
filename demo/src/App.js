import './App.css';
import {useState} from 'react';

function App() {
  const[Data,setData] = useState(false)
  return (
    <div className="App" style={{color:'white'}}>
      <h1>Hide & show Text</h1>

      {
        Data? <h3 style={{color:'blue'}}>Click Any button for magic.</h3>  : null
      }

      <button onClick={()=>setData(false)} style={{margin:'5px',background:'red',color:'white',padding:'5px'}}>Hide Text</button>
      <button onClick={()=>setData(true)} style={{background:'purple',color:'white',padding:'5px'}}>Show Text</button>
      <button onClick={()=>setData(!Data)} style={{margin:'5px',background:'green',color:'white',padding:'5px'}}>Toggle Text</button>
      <br/>
    </div>
  );
}

export default App;