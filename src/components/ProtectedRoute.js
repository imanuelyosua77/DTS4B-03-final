import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase"
import { useAuthState } from 'react-firebase-hooks/auth'

const ProtectedRoute = ({children}) => {
    const [user] = useAuthState (auth);
    const Navigate = useNavigate();

    if (!user){
        Navigate('/');
        return;
    }
    if (user){
        return children;
    }

}

export default ProtectedRoute;