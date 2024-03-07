const URL = 'https://pokeapi.co/api/v2/pokemon/'

const searchInput = document.getElementById("search")
const pokedexContainer = document.getElementById("pokedex")

function showError(msg) {
    let t = msg
    pokedexContainer.innerHTML = `<p class="error">${t}</p>`;

}
async function searchPokemon() {
    const searchPokemon = searchInput.value.toLowerCase()
    try {
        const  response = await fetch(URL + searchPokemon)

        if (!response.ok) {
            showError(`No se encontró el Pokémon llamado: ${searchPokemon}`);

            return;
        }
        const data = await response.json()
        pokedexContainer.innerHTML =
            `
            <h2>${data.name.toUpperCase()}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Número: ${data.id}</p>
            <p>Altura: ${data.height / 10}m</p>
            <p>Peso: ${data.weight / 10}km</p>
        `;
    } catch (error) {
        console.log(error)
        showError('a ocorido un error')
    }
}
document.getElementById("btn-search").addEventListener("click",searchPokemon)
