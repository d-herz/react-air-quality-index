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
    <div
      className='form-div'
    >
      <form
        className='mb-2'
        onSubmit={handleSearch}
        id='citySearchForm'
      >
        <input
          className='form-control'
          type="text"
          placeholder='Enter City'
          onChange={handleInputChange}
        />
      </form>
      <div className="button-container">
        <button
          className='btn btn-dark mx-1 mt-0'
          type='submit'
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className='btn btn-dark mx-1 mt-0'
          onClick={clearForm}
        >
          Clear Form
        </button>
      </div>
    </div>
  )
}

export default CitySearchForm
