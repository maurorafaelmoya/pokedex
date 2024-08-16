import React, { useState } from 'react'
import PagePrincipal from '../components/PagePrincipal'
import { Button, Stack, TextField, Typography } from '@mui/material';
import { getPokemonByParams } from '../config/axiosPokemon';
import CardPokemon from '../components/CardPokemon';

const NamePokemon = () => {

    const [pokemon, setPokemon] = useState('')
    const [pokemonData, setPokemonData] = useState('')
    

    const handleSend = async () =>{
        if(pokemon=== ''){
            alert('Faltan los datos')
            return
        }
        const data = await getPokemonByParams(pokemon);

        setPokemonData(data)

    }

    return (
        <PagePrincipal>
            <Stack spacing={2}>
                <Typography variant='h6'> Busqueda de pokemon por nombre o número </Typography>
                <hr/>
                <TextField 
                    id="outlined-basic" 
                    label="Nombre o número de pokemon" 
                    variant="outlined" 
                    value={pokemon}
                    type='text'
                    onChange={(event)=> setPokemon(event.target.value) }
                    />
                <Button 
                    variant='outlined'
                    onClick={handleSend}
                    >
                        Buscar
                </Button>

                {pokemonData && <CardPokemon data={pokemonData} /> } 
            </Stack>
        </PagePrincipal>
    )
}

export default NamePokemon;