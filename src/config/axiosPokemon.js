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


export const getPokemonByParams = async (initialNumber, finalNumber ) => {

    

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${initialNumber}&limit=${finalNumber}`);
        console.log(response);
            
        return {data: response, msg:'hecho' };

    } catch (error) {
        console.error(error);

        return {}
    }

    
}


export const getPicturePokemon = async ( url ) => {

    

    try {
        const response = await axios.get(url);
            
        return {data: response.data.sprites.front_default}

    } catch (error) {
        console.error(error);

        return {}
    }

    
}

export const getDataPokemon = async ( url ) => {

    

    try {
        const response = await axios.get(url);
        console.log(response);
            
        return {data: response, msg:'hecho' };

    } catch (error) {
        console.error(error);

        return {}
    }

    
}