import '../App.css'
import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const Navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        const data = new FormData (event.currentTarget)
        const email = data.get('email')
        const password = data.get('password')

        try{
            const {user} = await createUserWithEmailAndPassword(auth, email, password)
            console.log (user);
            Navigate("login");
        }
        catch(error){
            console.log('gagal daftar bro')
        }
    }
    return (
        <div className='loginForm'>
            <form onSubmit={handleRegister} className='loginFormContainer'>
                <p>REGISTER PAGE</p>
                <input name="email" placeholder='Your Email' type={'email'} required></input>
                <input name="password" placeholder='password' type={'password'} required></input>
                <button type='submit' className='authButton'>REGISTER</button>
                <Link to={'/login'}> <p>Want to Login ?</p> </Link>
                <Link to={'/'}> <p> Back Home ?</p> </Link>

            </form>
        </div>
    )
}

export default Register;