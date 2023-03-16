import { Pokemon } from '@/interfaces'
import { colorTypeGradients, hexToRGB } from '@/utils';
import { Card, Grid, Text ,Image, Row, Spacer} from '@nextui-org/react';

import React, { FC } from 'react'

interface Props{
    pokemon:Pokemon
}

export const PokemonCardMobile:FC<Props> = ({pokemon})  => {
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
      const mamecol = hexToRGB(finalColor[0], "0.8");

  return (
    <Grid xs={12} sm={4} md={2} xl={2} >
    <Card 
    isPressable
    isHoverable
    css={{ backgroundColor: cardbg }}
    
    >
        <Card.Body css={{p:1, display:'flex', flexDirection: "row", alignItems:'end',justifyContent:'flex-end'}}>
            
            <Grid xs={8} direction='column' css={{height:'100%', paddingLeft:'1.5em'}} justify='center'>
                    <Row>
                            <Text h3>#{String(id).padStart(3, "0")}</Text>
                            <Spacer x={0.5}/>
                            <Text transform='capitalize' h3 css={{color:`${mamecol}`}}>{name}</Text>
                    </Row>
                    <Row>
                    <div className="info_container_data_type">
                            { types.map((type) => (
                            
                                <div
                                    key={type.type.name}
                                    className={`poke_type_bg_resp ${type.type.name}`}
                                >
                                    <Image css={{height:`15px !important`}}
                                        src={`/icons/${type.type.name}.svg`}
                                        alt="poke-type"
                                    />
                                    <Text transform='capitalize'>{type.type.name}</Text>
                                </div>
                            ))}
                        </div>
                    </Row>
                
            </Grid>
            <Grid xs={4} className='sprite-container'>
                <Card.Image 
                src={sprites.other?.['official-artwork'].front_default!} 
                width="100%"
                height="auto"
                />
            </Grid>
            
            
        </Card.Body>
        {/* <Card.Footer css={{p:1, display:'flex', flexDirection: "column", alignItems:'center'}}>
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
        </Card.Footer> */}
    </Card>
</Grid>
  )
}
