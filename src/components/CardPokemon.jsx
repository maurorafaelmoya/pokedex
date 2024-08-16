import { Button, Card, CardContent, CardHeader, CardMedia, Stack } from '@mui/material'
import React, { useState } from 'react'

const CardPokemon = (props) => {

    const { name, abilities, img, type} = props.data
    console.log(abilities)
    const [number, setNumber] = useState(0)

    console.log(img[0])

    return (
        <>
            <Card sx={{ maxWidth: '50%' }}>
                <CardHeader 
                    title={name} 
                    subheader={type.map(index => (
                        index.type.name
                    ))}
                    />

            </Card>
            <CardContent>
                <Stack spacing={2}>
                    <Stack direction='row'>
                        <Button onClick={()=> setNumber(number-1)  } disabled={number===0 && true  }>  - </Button>
                        <img src={`${img[number]}`} alt='pokemon' width='400px' height='400px'/>
                        <Button onClick={()=> setNumber(number+1)  } disabled={number=== 3 && true  } > + </Button>
                    </Stack>

                    <ol>
                        {abilities.map(index =>(
                            <li >{index.ability.name}</li>
                        ))}
                    </ol>

                </Stack>

            </CardContent>

        </>
    )
}

export default CardPokemon