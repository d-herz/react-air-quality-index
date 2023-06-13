import React from 'react' 
import './App.css'
import CitySearchForm from '../components/CitySearchForm'

function App() {

  const [error, setError] = React.useState(null)
  const [airQualityData, setAirQualityData] = React.useState(null)

  // Fetch to Air Quality Open Data Platform
  React.useEffect(() => {
    const token = import.meta.env.VITE_API_KEY
    async function getAirQualityData(city) {
      try {
        const res = await fetch(`https://api.waqi.info/feed/${city}/?token=${token}`)
        const data = await res.json()
        console.log(res)
        console.log(data)
        if (res.ok && data.status === "ok") {
          setAirQualityData(data.data)
          setError(null)
        } else {
          setError("Sorry, location not found. Please check your spelling and try again.")
          setAirQualityData(null)
        }

      } catch (error) {
        console.error("network error:", error)
        setError("Something went wrong!")
        setAirQualityData(null)
      }
  
    }
    getAirQualityData("here")
  
  },[])

  return (
    <div>
      <h1>Air Quality Index Checker</h1>
      <CitySearchForm
        getAirQualityData = {getAirQualityData}
      />
    </div>
    
  )
}

export default App
