import { AppBar, Button, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink, useLocation } from "react-router-dom";

const MyAppBar = () => {

    const  namePages=
        [{
            name: 'Todos los pokemones',
            id:1,
            to:'/allPokemon'
        },
        {
            name: 'Busqueda por nombre de pokemon',
            id:2,
            to:'/namePokemon'
        },
        {
            name: 'Tipo de pokemones',
            id:3,
            to:'/typePokemon'
        },
        ]

        const page = useLocation();

    return (
        <AppBar style={{backgroundColor:'white'}} position="static">
            <Toolbar variant="dense">
                <Stack spacing={2} direction='row'> 
                    <Typography variant="h6" color="#345" component="div">
                        Pokedex
                    </Typography>
                    {namePages.map(index=>(
                        page.pathname===index.to ?
                            <Button
                                component={RouterLink}
                                to={index.to}
                                key={index.id}
                                variant='contained'
                                >
                                {index.name}    
                            </Button>
                        :
                            <Button 
                                key={index.id}
                                component={RouterLink}
                                to={index.to}
                                variant='outlined'>
                            
                                {index.name}    

                            </Button>

                    ))}
                    
                </Stack>
            </Toolbar>
        </AppBar>
    )
}


export default MyAppBar