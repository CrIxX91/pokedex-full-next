import { Pokemon } from '@/interfaces'
import { colorTypeGradients, hexToRGB } from '@/utils';
import { Card, Grid, Text ,Image} from '@nextui-org/react';

import React, { FC } from 'react'

interface Props{
    pokemon:Pokemon
}

export const PokemonCard:FC<Props> = ({pokemon}) => {
    const { id,name, types, sprites } = pokemon;
    let finalColor;

    if (types.length === 2) {
        finalColor = colorTypeGradients(
          types[0].type.name,
          types[1].type.name,
          types.length
        );
      } else {
        finalColor = colorTypeGradients(
          types[0].type.name,
          types[0].type.name,
          types.length
        );
      }
      const cardbg = hexToRGB(finalColor[0], "0.43");
      const mamecol = hexToRGB(finalColor[0], "0.6");
    //   const isMd = useMediaQuery(960);

    return (
        <Grid xs={4} sm={4} md={2} xl={2} >
            <Card 
            isPressable
            isHoverable
            css={{ backgroundColor: cardbg }}
            
            >
                <Card.Body className='bodycard'>
                    <Grid direction='row' justify='center' alignContent='center' css={{display:'flex'}} >
                        <Grid className='numberbg'>
                            <Text >#{String(id).padStart(3, "0")}</Text>
                        </Grid>
                    </Grid>
                    
                    <Card.Image 
                    src={sprites.other?.['official-artwork'].front_default!} 
                    width="100%"
                    height={140}
                    className='spritepokm'
                    />
                </Card.Body>

                <Card.Footer css={{p:1, display:'flex', flexDirection: "column", alignItems:'center'}}>
                    <Grid alignItems='center'>

                    <div className="info_container_data_type">
                        {types.map((type) => (
                          <div
                            key={type.type.name}
                            className={`poke_type_bg ${type.type.name}`}
                          >
                            <Image css={{height:`60% !important`,width:`60% !important`,margin:'20%'}}
                              src={`/icons/${type.type.name}.svg`}
                              alt="poke-type"
                            />
                          </div>
                        ))}
                      </div>
                      <Grid>
                        <Text transform='capitalize' h3 css={{color:`${mamecol}`}}>{name}</Text>
                      </Grid>
                        
                    </Grid>
                </Card.Footer>
            </Card>
        </Grid>
    )
}
