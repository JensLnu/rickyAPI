import { useEffect, useState } from 'react'
import './App.css'
import Cards from './components/Cards';

function App() {
  const [charCounter, setCharCounter] = useState(0);
  const [dataChar, setDataChar] = useState([""]);

  useEffect(() => {
    const fetchRick = async () => {
      try {
        const data = await fetch('https://rickandmortyapi.com/api/character');
        const response = await data.json();
        console.log(response.results)
        setDataChar(response.results)
      } catch (err) {
        console.log(err);
      }
    }
    fetchRick();
  }, [])

  return (
    <>
      <button onClick={() => {charCounter < 19 ? setCharCounter(prev => prev + 1) : setCharCounter(0)}}>Get new character</button>
      <div>
        <Cards dataChar={dataChar[charCounter]} />
      </div>
    </>
  )
}

export default App
