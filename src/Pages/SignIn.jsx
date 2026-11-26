import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {

        const user = localStorage.getItem("user");

        if (user) {
            setIsLoggedIn(true);
        }

    }, []);

    function handleLogin() {

        const registeredUser = JSON.parse(
            localStorage.getItem("registeredUser")
        );

        if (
            registeredUser &&
            email === registeredUser.email &&
            password === registeredUser.password
        ) {

            localStorage.setItem("user", email);

            setIsLoggedIn(true);

            alert("Login Successful!");

            navigate("/");

        } else {

            alert("Invalid email or password!");

        }
    }

    function handleLogout() {

        localStorage.removeItem("user");

        setIsLoggedIn(false);

        setEmail("");
        setPassword("");

    }

    return (

        <div>

            <h1>Sign In</h1>

            {isLoggedIn ? (

                <div>
                    <h2>Welcome Back!</h2>

                    <button onClick={handleLogout}>
                        Logout
                    </button>
                </div>

            ) : (

                <div>

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <br /><br />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <br /><br />

                    <button onClick={handleLogin}>
                        Login
                    </button>

                </div>

            )}

        </div>

    );
}

export default SignIn;
