import { Text, Container } from '@nextui-org/react';
import Image from 'next/image';
import NextLink from 'next/link';
import Pokeball from '../../public/pokeball.png'

export const Navbar = () => {

  return (
    <div style={{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start',
        padding:'0px 20px',
        backgroundColor:'#D53B47',
        position:'sticky',
        top: '0px',
        zIndex:'99'

    }}>
        <Image 
            src={Pokeball.src} 
            alt='icon'
            width={30}
            height={30}
        />

        <NextLink href='/' passHref>
          <Container display='flex' alignItems='center' css={{padding:'2px !important'}}>
            <Text color='white' h2>P</Text>
            <Text color='white' h3>okédex</Text>
          </Container>
        </NextLink>
        

    </div>
  )
}
