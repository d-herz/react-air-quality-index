import React from 'react'

function CitySearchForm({ airQualityData, setAirQualityData, getAirQualityData }) {
  const [inputValue, setInputValue] = React.useState("")
  // console.log(inputValue)
  
  function handleInputChange(event) { 
    const { name, value } = event.target
    setInputValue(value)
  }
  
  function handleSearch(event) {
    event.preventDefault()
    const formattedCity = inputValue.replace(/ /g, '-')
    getAirQualityData(formattedCity)
    console.log("Form submitted")
  }

  function clearForm() {
    document.getElementById("citySearchForm").reset()
    setInputValue("")
    getAirQualityData("here")
  }

  return (
    <div>
      {/* <h3>Air Quality Index Checker</h3> */}
      <form
        className='mb-4'
        onSubmit={handleSearch}
        id='citySearchForm'
      >
        <input
          className='form-control'
          type="text"
          placeholder='Enter City'
          onChange={handleInputChange}
        />
        <button
          className='btn btn-primary mt-3'
          type='submit'
        >
          Search
        </button>
      </form>
      <button
        className='btn btn-primary mt-0'
        onClick={clearForm}
      >
        Clear Form
      </button>
    </div>
  )
}

export default CitySearchForm
