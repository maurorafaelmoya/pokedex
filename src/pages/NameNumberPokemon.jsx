import React, { useState } from 'react'
import PagePrincipal from '../components/PagePrincipal'
import { Alert, Button, Stack, TextField, Typography } from '@mui/material';
import { getPokemonByParams } from '../config/axiosPokemon';
import CardPokemon from '../components/CardPokemon';

const NameNumberPokemon = () => {

    const [pokemon, setPokemon] = useState('')
    const [pokemonData, setPokemonData] = useState('')
    const [msg, setMsg] = useState('')
    const [severitity, setSeverity] = useState('')
    

    const handleSend = async () =>{
        setMsg('')
        setSeverity('')

        if(pokemon=== ''){
            alert('Faltan los datos')
            return
        }
        const data = await getPokemonByParams(pokemon);

        setMsg(data.msg)
        setSeverity(data.severity)

        if(data.severity === 'success'){
            setPokemonData(data)
        }

    }

    return (
        <PagePrincipal>
            <Stack spacing={2}>
                <Typography variant='h6'> Busqueda de pokemon por nombre o número </Typography>
                <hr/>
                {msg && <Alert severity={severitity}>{msg} </Alert> }
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

export default NameNumberPokemon;