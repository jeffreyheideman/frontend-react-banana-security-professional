import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:3000/register', {
                email,
                password,
                username,
            });

        } catch (e) {
            console.error("Registratie mislukt ⛔", e);

        }
    };

    return (
        <>
            <h1>Registreren</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Gebruikersnaam</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="off"
                    />
                </div>
                <div>
                    <label htmlFor="password">Wachtwoord</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="off"
                    />
                </div>
                <button type="submit">Registreren</button>
            </form>
            <p>
                Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.
            </p>
        </>
    );
}

export default SignUp;
