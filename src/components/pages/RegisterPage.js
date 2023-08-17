import React from 'react'
import {useState} from "react";

import '../../App.css'
import {Link} from "react-router-dom";

export default function SignUpPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    let handleSubmit = async (e) => {
        setMessage("");
        setError("");

        const apiBase = "LACONIC_HOSTED_CONFIG_api_url";
        e.preventDefault();
        try {
            let res = await fetch(`${apiBase}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setMessage(`${resJson['api-key']}`);
            } else {
                setError(`An error occurred: ${res.status}`);
            }
        } catch (err) {
            setError("An error occurred.");
        }
    };

    return (
        <div className="text-center m-5-auto">
            {message ?
                <div className="success">
                    <h2>Account Created</h2>
                    <div className="message">
                        <h5>API Key</h5>
                        {message}
                        <div className="note">Save this key. It will not be displayed again.</div>
                    </div>
                </div>
                :
                <div>
                    {/*<h2>Join us</h2>*/}
                    {/*<h5>Create your personal account</h5>*/
                    }
                    <form onSubmit={handleSubmit} action="">
                        {/*<p>*/}
                        {/*    <label>Username</label><br/>*/}
                        {/*    <input type="text" name="username"*/}
                        {/*           onChange={(e) => setUsername(e.target.value)}*/}
                        {/*           required />*/}
                        {/*</p>*/}
                        <p>
                            <label>E-mail Address</label><br/>
                            <input type="email" name="email"
                                   onChange={(e) => setEmail(e.target.value)}
                                   required/>
                        </p>
                        {/*<p>*/}
                        {/*    <label>Password</label><br/>*/}
                        {/*    <input type="password" name="password" requiredc />*/}
                        {/*</p>*/}
                        <p>
                            <input type="checkbox" name="checkbox" id="checkbox" required/>
                            <span>I agree all statements in <a
                                href="https://cerc.io" target="_blank"
                                rel="noopener noreferrer">terms of service</a></span>.
                        </p>
                        <p>
                            <button id="sub_btn" type="submit">Register</button>
                        </p>
                    </form>
                    <div className="error">{error ? <p>{error}</p> : null}</div>
                </div>
            }
            <footer>
                <p><Link to="https://cerc.io">Docs</Link></p>
            </footer>
        </div>
    )

}
