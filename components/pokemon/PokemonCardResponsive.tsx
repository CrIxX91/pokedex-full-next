import { Pokemon } from '@/interfaces'
import { FC, Fragment } from 'react'
import { PokemonCard } from './PokemonCard'
import { PokemonCardMobile } from './PokemonCardMobile'


interface Props{
    pokemon:Pokemon,
    width:number
}

export const PokemonCardResponsive:FC<Props> = ({pokemon,width}) => {
  return (
    <Fragment>
        {
            width > 614 ? <PokemonCard pokemon={pokemon}/>:<PokemonCardMobile pokemon={pokemon}/>
        }
    </Fragment>
    
    // 
  )
}
