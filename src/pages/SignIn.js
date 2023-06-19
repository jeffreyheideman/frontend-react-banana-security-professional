import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from "axios";

function SignIn() {
    const {login} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Stap 3: Request naar de server met inlog-gegevens
        try {
            const res = await axios.post('http://localhost:3000/login', {
                email,
                password
            });
            // Stap 4: Geef de JWT mee aan de login functie
            login(res.data.accessToken);
        } catch (e) {
            console.error("Onjuist email en wachtwoord combinatie ⛔", e)
            // Hier je error handling in de UI
        }
    }


    return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                       autoComplete="off"/>
            </div>
            <div>
                <label htmlFor="password">Wachtwoord</label>
                <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                       autoComplete="off"/>
            </div>
            <button type="submit">Login</button>
        </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;