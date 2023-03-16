import { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props{
    children:ReactNode,
    title?:string
}

const origin =(typeof window === 'undefined')?'': window.location.origin;

export const Layout:FC<Props> = ({children,title}) => {
  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name="author" content="Cristian Aguilar"/>
            <meta name="description" content="Informacion sobre el pokemon XXX"/>
            <meta name="keywords" content="XXX,pokemon,pokedex"/>
            <meta property="og:image" content={`${origin}/img/pokedexBanner.webp`}/>
        </Head>

        <Navbar/>

        <main style={{
            padding:'0px 10vw'
        }}>
            {children}
        </main>
    </>
  )
}