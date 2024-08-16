import React, { useEffect, useState } from 'react'
import PagePrincipal from '../components/PagePrincipal'
import { Box, Button, Stack, Typography } from '@mui/material';
import { getAllPokemon, getPicturePokemon } from '../config/axiosPokemon';

const AllPokemon = () => {

    const [initialNumber, setInitialNumber] = useState(0)
    const [pokemones, setPokemones] = useState([])
    const [selected, setSelected] = useState(true)


    useEffect(() => {
        getPokemon(initialNumber,20)
    }, [initialNumber])

    
    // const {data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/?offset=${initialNumber}&limit=${finalNumber}`);

    const getPokemon = async (initialNumber,finalNumber) =>{
        const pokemon = await getAllPokemon(initialNumber,finalNumber);

        setPokemones(pokemon.data)
    }

    const getDataPokemon = (array) =>{
        console.log(array[0])
        setSelected(array[0])


    }

    const previousPokemon = () => {
        setInitialNumber(prev => Math.max(prev - 20, 0)); // Prevent going below 0
    };

    const nextPokemon = () => {
        setInitialNumber(prev => prev + 20);
    };

    const BoxImage =({name, number, url} ) => {

        if(number === selected){
            return ( 
                    <Box 
                        key={name} 
                        height={150}
                        width={150}
                        sx= {{ m: 2, border: '2px solid #e3026f'}}
                    >
                        <Stack spacing={2}>
                            <Button
                                style={{width:'100%', height:'100%'}} 
                                onClick={()=> getDataPokemon([number,url]) }
                            >
                                <img style={{width:'70%', height:'100%'}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${initialNumber + number + 1}.png`} />
                            </Button>
                            <Typography variant='h6' align='center'> {name}</Typography>
                        </Stack>
                    </Box>    
            )
        }else{
            return (
                <Box 
                    key={name} 
                    height={150}
                    width={150}
                    sx= {{ m: 2, border: '2px solid gray'}}
                >
                    <Stack spacing={2}>
                        <Button
                            style={{width:'100%', height:'100%'}} 
                            onClick={()=> getDataPokemon([number,url]) }
                            >
                            <img style={{width:'70%', height:'100%'}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${initialNumber + number +1 }.png`} />
                        </Button>
                        <Typography variant='h6' align='center'> {name}</Typography>
                    </Stack>
                </Box>  
            )  
        }
    }



    return (
        <PagePrincipal>
            <Stack spacing={2}>
                <Typography variant='h6'> Todos los pokemones </Typography>
                <hr/>
                <Box 
                key={'boxPokemon'} 
                sx={{ display: "flex", flexWrap: "wrap" }}
                    height={'100hv'}
                    width={'100%'}
                >
                        {pokemones.map((pokemon, index) => {
                            return (
                                <BoxImage
                                    key={pokemon.name}
                                    number={index}
                                    name={pokemon.name}
                                    url={pokemon.url}
                                />
                            );
                        })}
                </Box>
                <Stack direction='row' spacing={2}>
                    <Button 
                        onClick={previousPokemon}
                        disabled={initialNumber===0 ? true : false}
                    > 
                        Previus
                    </Button>
                    <Button 
                        onClick={nextPokemon}
                        >
                        Next
                    </Button>
                </Stack>


            </Stack>
        </PagePrincipal>
    )
}

export default AllPokemon