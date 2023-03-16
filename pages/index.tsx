import { Grid, Text } from '@nextui-org/react';
import { Layout } from '@/components/layout/Layout';
import { pokeApi } from '@/api';
import { PokemonListResponse,Pokemon } from '@/interfaces';
import { GetStaticProps, NextPage } from 'next';

import useDimensions from "react-cool-dimensions";
import { PokemonCardResponsive } from '@/components/pokemon/PokemonCardResponsive';

interface Props{
  pokemons:Pokemon[]
}

const HomePage:NextPage<Props> = ({pokemons}) => {
  

  const { observe, width } = useDimensions({

    onResize: ({ observe, unobserve }) => {
      unobserve();
      observe();
    },
  });

  return (
    <Layout >
      {/* {
        <Text>{width}</Text>
      } */}
      <Grid.Container gap={2} justify='flex-start' ref={observe} >
        {
          pokemons.map(pkm=>(
              <PokemonCardResponsive key={pkm.name} pokemon={pkm} width={width}/>
          ))
        }
      </Grid.Container>
    </Layout>
  )
}
export const getStaticProps:GetStaticProps =async (ctx) => {
  
  const getPokemonInfo =async (name:string) => {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);
    return cleanpokemon(data)
  }

  const cleanpokemon = (pokemonfull:Pokemon) => {
    const { name, sprites, types, id, height, weight, abilities, stats } = pokemonfull;
    const newpokemon = { name, sprites, types, id, height, weight, abilities, stats };
    return newpokemon
  }

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons = await Promise.all(
    data.results.map(async (pkm) => {
      return await getPokemonInfo(pkm.name)
    })
  )

  return{
    props:{
      pokemons
    }
  }
}

export default HomePage;