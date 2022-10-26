import '../App.css';
import { Link } from 'react-router-dom';


const AuthButton = () => {
    return(
        <Link to={"/login"}>
        <button className='authButton'>
            <a>LOGIN</a>
        </button>
        </Link>
    )
}

export default AuthButton;