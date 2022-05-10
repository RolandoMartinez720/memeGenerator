import React from "react"
import memesData from '../memesData'

export default function Meme(){

    // const [allMemeImages, setAllMemeImages]=React.useState(memesData) changed var = from this state value on line 16 'dont think its needed'

    const [meme, setMeme]= React.useState({
        topText:'',
        bottomText:'',
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    function setText(event){
       let {name,value,id}=event.target;
        setMeme((prev)=>(
            {
                ...prev,
                [name]:[value]
                
            }
        ))
    }

    function getMemeImage(){
    
    let memesArray= memesData.data.memes;
    let randImg=Math.floor(Math.random()*memesArray.length);
    let url=memesArray[randImg].url;
    console.log(memesData.data.memes[randImg].id , randImg);
    setMeme((prev)=>({
        ...prev,
        randomImage:url,
    }))


    }
 
  
    return(
        <main>
            <div className="meme--container">
            
                    <input onChange={setText} name='topText' className="top-text" type="text" placeholder="Top Text"/>
                    <input onChange={setText} name='bottomText' className="bottom-text" type="text" placeholder="Bottom Text"/>
                    <button onClick={getMemeImage} type='button' className='meme--button'>Get New Image</button>
            
            </div>
           <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2  className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}