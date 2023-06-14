import React from 'react' 
import './App.css'
import CitySearchForm from '../components/CitySearchForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import AirQualityCard from '../components/AirQualityCard'

function App() {

  const [error, setError] = React.useState(null)
  const [airQualityData, setAirQualityData] = React.useState(null)

  const token = import.meta.env.VITE_API_KEY

  async function getAirQualityData(city) {
    try {
      const res = await fetch(`https://api.waqi.info/feed/${city}/?token=${token}`)
      const data = await res.json()
      // console.log(res)
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
      if (!airQualityData) {
        setError("Please Enter a Location")
      } else {
        setError("Something went wrong!")
      }
      setAirQualityData(null)
    }

  }

  // Fetch to Air Quality Open Data Platform
  React.useEffect(() => {
    getAirQualityData("here")
  },[])

  return (
    <div
      className='container'
    >
      <h1
        className='mt-5 mb-3'
      >
        Air Quality Index Checker</h1>
      <CitySearchForm
        airQualityData={airQualityData}
        setAirQualityData={setAirQualityData}
        getAirQualityData={getAirQualityData}
      />
      {error && (
        <div
          className="alert alert-danger"
        >
          {error}
        </div>
      )}
      {airQualityData && (
        <>
          <AirQualityCard
            data={airQualityData}
          />
        </>
      )}
    </div>
    
  )
}

export default App
