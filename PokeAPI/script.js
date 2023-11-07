document.addEventListener('DOMContentLoaded', () => {
  const fetchButton = document.getElementById('fetchPokemon')
  const pokemonInfo = document.getElementById('pokemonInfo')
  const inputPokemon = document.getElementById('inputPokemon')

  fetchButton.addEventListener('click', () => {
    const pokemonName = inputPokemon.value.toLowerCase()
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response broke')
        }
        return response.json()
      })
      .then((data) => {
        const abilities = data.abilities
          .map((ability) => ability.ability.name)
          .join(', ')
        // Create HTML content to display Pokemon data
        const htmlContent = `
                    <h2>${data.name}</h2>
                    <p>Types: ${data.types
                      .map((type) => type.type.name)
                      .join(', ')}</p>
                    <p>Height: ${data.height} </p>
                    <p>Weight: ${data.weight} </p>
                    <p>Abilities: ${abilities} </p>
                    <img src="${data.sprites.front_default}" alt="${
          data.name
        }" />`

        // Display the Pokemon data in the 'pokemonInfo' div
        pokemonInfo.innerHTML = htmlContent
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  })

  fetchButton.addEventListener('click', () => {
    const locationId = 1 // Replace with the desired location's ID
    const locationApiUrl = `https://pokeapi.co/api/v2/location/${locationId}/`

    fetch(locationApiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((locationData) => {
        // Process location data
        const locationName = locationData.name
        const locationRegion = locationData.region.name
        const locationAreas = locationData.areas
          .map((area) => area.name)
          .join(', ')

        // Display location information
        const locationInfo = `
        <h2>${locationName}</h2>
        <p>Region: ${locationRegion}</p>
        <p>Areas: ${locationAreas}</p>
      `

        // Display the location data in a specific section of your HTML
        locationInfoSection.innerHTML = locationInfo
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  })
})
