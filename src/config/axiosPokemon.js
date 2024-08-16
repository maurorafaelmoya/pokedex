import axios from 'axios';

export const getAllPokemon = async (initialPokemon, finalPokemon ) => {

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${initialPokemon}&limit=${finalPokemon}`);
        // console.log(response.data.results);
            
        return {data: response.data.results, msg:'success', code:201 };

    } catch (error) {
        console.error(error);

        return {data:[], msg:'error', code:500 }
    }

    
}


export const getPokemonByParams = async ( params ) => {

    

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params}`);
        const response1 = await axios.get(`https://pokeapi.co/api/v2/pokemon-form/${params}`);

        console.log(response.data);
            
        return {name: response.data.name, abilities: response.data.abilities, img: [response.data.sprites.front_default,response.data.sprites.back_default, response.data.sprites.front_shiny,response.data.sprites.back_shiny ], type: response1.data.types,  msg:'success' };

    } catch (error) {
        console.error(error);

        return {data: null, msg:'error'}
    }

    
}


