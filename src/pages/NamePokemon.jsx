import React, { useState } from 'react'
import PagePrincipal from '../components/PagePrincipal'
import { Button, Stack, TextField, Typography } from '@mui/material';
import { useFetch } from '../hooks/useFetch';

const NamePokemon = () => {

    const [pokemon, setPokemon] = useState('')
    

    const handleSend = async () =>{
        console.log(pokemon)
        if(pokemon=== ''){
            alert('Faltan los datos')
            return
        }

        const {data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        console.log(data)

        console.log('one search')
    }

    return (
        <PagePrincipal>
            <Stack spacing={2}>
                <Typography variant='h6'> Busqueda de pokemon por nombre </Typography>
                <hr/>
                <TextField 
                    id="outlined-basic" 
                    label="Nombre pokemon" 
                    variant="outlined" 
                    value={pokemon}
                    onChange={(event)=> setPokemon(event.target.value) }
                    />
                <Button 
                    variant='outlined'
                    onClick={handleSend}
                    >
                        Buscar
                </Button>
            </Stack>
        </PagePrincipal>
    )
}

export default NamePokemon