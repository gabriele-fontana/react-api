import { useState, useEffect } from 'react'

const actressesApi = 'https://lanciweb.github.io/demo/api/actresses/'
const actorsApi = 'https://lanciweb.github.io/demo/api/actors/'

function App() {
  // useState
  const [actors, setActors] = useState([])
  const [actresses, setActresses] = useState([])

  // useEffect to render the page at fetch
  useEffect(() => {
    // Fetch Attori
    fetch(actorsApi)
      .then(res => res.json())
      .then(data => {
        console.log("Attori:", data)
        setActors(data)
      })

    // Fetch Attrici
    fetch(actressesApi)
      .then(res => res.json())
      .then(data => {
        console.log("Attrici:", data)
        setActresses(data)
      })
  },)

  return (
    <div>
      <h1>Lista Attori:</h1>
      {actors.map(actor => (
        <h2>{actor.name}</h2>
      ))}

      <h1>Lista Attrici:</h1>
      {actresses.map(actress => (
        <h2>{actress.name}</h2>
      ))}
    </div>
  )
}

export default App
