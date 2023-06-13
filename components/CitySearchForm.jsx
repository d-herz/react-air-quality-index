import React from 'react'

function CitySearchForm({ airQualityData, setAirQualityData }) {
  const [inputValue, setInputValue] = React.useState("")

  console.log(inputValue)
  
  function handleInputChange(event) { 
    const { name, value } = event.target
    setInputValue(value)
  }
  
  function handleSearch(event) {
    event.preventDefault()
    const { value } = event.target
    console.log("Form submitted")
  }

  function clearForm() {
    document.getElementById("citySearchForm").reset()
    setInputValue("")
  }

  return (
    <div>
      <h3>Henlo</h3>
      <form action="" onSubmit={handleSearch} id='citySearchForm'>
        <input
          type="text"
          placeholder='Enter City'
          onChange={handleInputChange}

        />
        <button type='submit'>Search</button>
      </form>
        <button onClick={clearForm}>Clear Form</button>
    </div>
  )
}

export default CitySearchForm
