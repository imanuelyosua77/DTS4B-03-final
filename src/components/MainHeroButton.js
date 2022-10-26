import React from "react"
import '../App.css';
import { Link } from "react-router-dom";

const MainHeroButton = () => {
    return (
        <Link to={"/register"}>
        <button className='MainHeroButton'>
            <a>Register Now</a>
        </button>
        </Link>
    )
}

export default MainHeroButton;