
import '../App.css'
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const Navigate = useNavigate();
    const handleLogin = async (event) => {
        event.preventDefault();
        const data = new FormData (event.currentTarget)
        const email = data.get('email')
        const password = data.get('password')

        try{
            const {user} = await signInWithEmailAndPassword(auth, email, password)
            console.log (user);
            Navigate("/searchquote");
        }
        catch(error){
            console.log('gagal login bro')
        }
    }

    return (
        <div className='loginForm'>
            <form onSubmit={handleLogin} className='loginFormContainer'>
                <p>Login Page</p>
                <input name='email' placeholder='Your Email'type={'email'} required></input>
                <input name='password' placeholder='password'type={'password'} required></input>
                <button type='submit' className='authButton'>LOGIN</button>
                <Link to={'/register'}> <p>Want to Register ?</p> </Link>
                <Link to={'/'}> <p> Back Home ?</p> </Link>


            </form>
        </div>
    )
}

export default Login;