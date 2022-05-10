import React from 'react'
import Header from "./components/Header";
import Meme from "./components/Meme";
import Memes from "./memesData";

export default function App(){
    return(<>
        <Header />
        <Meme/>
        </>
    )
}