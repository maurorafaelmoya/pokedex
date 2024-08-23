import React, { useEffect, useState } from 'react'
import PagePrincipal from '../components/PagePrincipal'
import { Box, Button, Stack, Typography } from '@mui/material'
import { getListTypePokemon } from '../config/axiosPokemon'

const TypePokemon = () => {

    const [typePokemons, settypePokemons] = useState([1,2,3,4,5,6,7,8,9])

    useEffect(() => {
        getType() 
    }, [])

    const getType = async ()=> {
        const pokemon = await getListTypePokemon();

        console.log(pokemon)
    }



    return (
        <PagePrincipal>

            <Stack spacing={2}>
                <Typography variant='h6'> Tipos de pokemones </Typography>
                <hr/>
                <Box 
                key={'boxPokemon'} 
                sx={{ display: "flex", flexWrap: "wrap" }}
                    height={'100hv'}
                    width={'100%'}
                >
                    {typePokemons.map(index => (
                        <Box 
                        key={index} 
                        height={150}
                        width={150}
                        sx= {{ m: 2, border: '2px solid grey'}}
                    >
                        <Button
                            style={{
                                width:'100%', 
                                height:'100%',
                                justifyItems:'center',
                                justifyContent:'center',
                            }} 
                        >
                            Tierra
                        </Button>
                    </Box>    
                    ))}
                    
                </Box>
            </Stack>
        </PagePrincipal>
    )
}

export default TypePokemon