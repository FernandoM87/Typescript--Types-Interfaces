"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    function fetchPokemonData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch Pokémon data');
                }
                const data = yield response.json();
                return data.pokemon;
            }
            catch (error) {
                throw error;
            }
        });
    }
    document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
        const pokemonList = document.getElementById('pokemon-list');
        try {
            const pokemonData = yield fetchPokemonData();
            pokemonData.forEach((pokemon) => {
                const listItem = document.createElement('li');
                listItem.textContent = pokemon.name;
                pokemonList === null || pokemonList === void 0 ? void 0 : pokemonList.appendChild(listItem);
            });
        }
        catch (error) {
            console.error('Error fetching Pokémon data:', error);
        }
    }));
}
