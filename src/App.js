import { useEffect } from 'react';
import './App.css';
const tg = window.Telegram.WebApp

function App() {
  useEffect(()=>{
    tg.redy()
  }, [])

  const onClose = () =>{

  }
  return (
    <div className="App">
        <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
