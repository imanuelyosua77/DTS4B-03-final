import "../App.css"
import axios from 'axios';
import { useState } from 'react';
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from 'firebase/auth'

const SearchQuote = () => {
    const options = [
        { value: 'anime', label: 'Anime Name' },
        { value: 'character', label: 'Character Name' },
    ]

    const [option, setOption] = useState(options)
    const handleSelectChange = (event) => {
        const selected = event;
        setOption(selected.value)
    }
    const [inputData, setInputData] = useState('')
    const handleInputChange = (event) => {
        setInputData(event.target.value)
    }
    const [datas, setDatas] = useState([])
    async function getByAnime() {
        try {
            const result = await axios.get('https://animechan.vercel.app/api/quotes/anime', { params: { title: inputData } })
            setDatas(result.data)
            console.log(result.data)
        }
        catch (error) {
            console.log("error dikit gaes")
        }
    }
    async function getByCharacter() {
        try {
            const result = await axios.get('https://animechan.vercel.app/api/quotes/character', { params: { name: inputData } })
            setDatas(result.data)
            console.log(result.data)
        }
        catch (error) {
            console.log("error dikit gaes")
        }
    }
    const getDataAnime = () => {
        // console.log(option)
        // console.log(inputData)

        switch (option) {
            case 'anime':
                getByAnime();
                break
            case 'character':
                getByCharacter();
                break
            default: console.log("error dikit gaes")
        }
    }
    const Navigate = useNavigate();
    const onLogout = async () => {
        try {
            await signOut (auth)
            Navigate ("/")
            
        } catch (error) {
            console.log("gagal LOGOUT bro")
        }
    }
    return (
    <div>
        <nav className="Navigation">
          <p className="logo"><span className='ota'>OTA</span>Quote</p>
          <h6> Halloo</h6>
          <button onClick={onLogout} className="authButton">Logout</button>
        </nav>
        <div className="AnimeContainer">
            <p className='TitleAnimeText'>ANIME QUOTE MOTIVATION</p>
            <div className="SearchAnimeSection">
                <Select onChange={handleSelectChange} className='selectAnime' placeholder='Choose by Anime or Character' options={options} />
                <input onChange={handleInputChange} className='inputSearch' placeholder='Search' />
                <button className="FindAnimeButton" onClick={getDataAnime}>haloo </button>
            </div>
            <p className='GuideAnimeText'>Search By Anime Name, or by Character Name</p>
            <div className="ResultAnimeSection">
                {datas.map((data) => {

                    return (
                        <div className='QuoteResults'>
                            <p>{data.anime}</p>
                            <p>{data.character}</p>
                            <p>{data.quote}</p>
                        </div>
                    )
                })}
            </div>
            <p>here's your quote, hope it will keep you alive :) </p>
        </div>
    </div>

    )
}

export default SearchQuote;