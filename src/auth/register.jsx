import React, { useState } from 'react'
import { app, auth } from '../firebase/firebase'
import { getAuth ,createUserWithEmailAndPassword } from "firebase/auth"
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom'


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth(app)
    const navigate = useNavigate()

    const Register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user)
                swal("Good job!", "You clicked the button!", "success");
                navigate('/')
        })
        .catch(( error ) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            swal("Отсвует", "Этот аккаунт уже зарегистровован", "warning")

        })
    }
    return (
        <>
            <form> 
                <input type="email"  placeholder='email' onChange={( event ) => setEmail(event.target.value)}/>
                <input type="password" placeholder='password' onChange={( event ) => setPassword( event.target.value )} />
                <button onClick={ Register }>Create</button>
            </form>
        </>
    )
}
export default Signup