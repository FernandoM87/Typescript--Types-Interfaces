{

    interface Pokemon {
        name:string;
        url:string;
    }

    async function fetchPokemonData(): Promise<Pokemon[]> {
        try {
          const response = await fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
          if (!response.ok) {
            throw new Error('Failed to fetch Pokémon data');
          }
          const data = await response.json();
          return data.pokemon;
        } catch (error) {
          throw error;
        }
      }

      document.addEventListener('DOMContentLoaded', async () => {
        const pokemonList = document.getElementById('pokemon-list');
      
        try {
          const pokemonData = await fetchPokemonData();
          pokemonData.forEach((pokemon) => {
            const listItem = document.createElement('li');
            listItem.textContent = pokemon.name;
            pokemonList?.appendChild(listItem);
          });
        } catch (error) {
          console.error('Error fetching Pokémon data:', error);
        }
      });
    

}