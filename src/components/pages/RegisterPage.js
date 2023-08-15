import React from 'react'
import { useState } from "react";

import '../../App.css'

export default function SignUpPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("/register", {
                method: "POST",
                body: JSON.stringify({
                    username: username,
                    email: email,
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setMessage("User created successfully");
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            setMessage("Some error occured");
        }
    };


    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            {/*<h5>Create your personal account</h5>*/}
            <form onSubmit={handleSubmit} action="">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="username"
                           onChange={(e) => setUsername(e.target.value)}
                           required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email"
                           onChange={(e) => setEmail(e.target.value)}
                           required />
                </p>
                {/*<p>*/}
                {/*    <label>Password</label><br/>*/}
                {/*    <input type="password" name="password" requiredc />*/}
                {/*</p>*/}
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://cerc.io" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>

            <div className="message">{message ? <p>{message}</p> : null}</div>
            {/*<footer>*/}
            {/*    <p><Link to="/">Back to Homepage</Link>.</p>*/}
            {/*</footer>*/}
        </div>
    )

}
