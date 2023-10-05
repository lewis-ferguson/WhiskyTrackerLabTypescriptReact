import { useEffect, useState } from 'react'
import { Whisky, Distillery, FetchPaths } from './types'
// import './App.css'

function App() {

  const [region, setRegion] = useState<string>("")
  const [filteredWhiskies, setFilteredWhiskies] = useState<Whisky[] | null>(null)

  const [whiskies, setWhiskies] = useState<Whisky[] | null>(null)

  useEffect(() => {
    fetch(FetchPaths.WHISKIES)
    .then((res) => res.json())
    .then(((data) => setWhiskies(data)))
  }, [])

  const handleSubmit = (e:React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (whiskies != null) {
    setFilteredWhiskies(whiskies.filter((item) => item.distillery.region === region))
    }
  }
  console.log(filteredWhiskies);


  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter a region' onChange={(e) => setRegion(e.target.value)}></input>
        <button type='submit'>Submit!</button>
      </form>

    {(filteredWhiskies != null) ? filteredWhiskies.map((whisky) => <p>{whisky.name}</p>): whiskies != null && whiskies.map((whisky) => <p>{whisky.distillery.name}</p>)}
    </>
  )
}

export default App
