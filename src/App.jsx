import React from 'react' 
import './App.css'

// Fetch to Air Quality Open Data Platform
React.useEffect(() => {
  async function getAirQualityData(city) {
    try {
      const res = await fetch(`https://api.waqi.info/feed/${city}/?token=${import.meta.env.VITE_API_KEY}`)
      const data = await res.json()

    } catch {

    }
    

  }


},[])

function App() {


  return (
   <h1>Hello world</h1>
  )
}

export default App
