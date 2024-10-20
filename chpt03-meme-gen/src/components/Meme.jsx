import React, {useEffect} from "react"
import memeData from "../../memeData.js"        // dummy local data..Next version of the app will use data obtained from an online API

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])        // in the past we initialized this with "memeData", meaning the data from the file memeData.js


    useEffect(() => {
        fetchMemes();
    }, []);


    const fetchMemes = () => {
        console.log("fetching memes");
        const response =  fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(jsonData => setAllMemeImages(jsonData.data.memes));       // because we want only the array of memes in the allMemeImages state, and we need to go inside the json with .data.memes

    }

    console.log(allMemeImages)

    function getMemeImage() {
        const memesArray = allMemeImages
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(previousMeme => ({
            ...previousMeme,                        // this means that all properties of the previous state remain unchanged, with the exception of randomImage, which gets the new URL
            randomImage: url
        }))

    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(previousMeme => ({
            ...previousMeme,                        // this means that all properties of the previous state remain unchanged, topText or bottomText, depending on for which one was the event triggered
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}