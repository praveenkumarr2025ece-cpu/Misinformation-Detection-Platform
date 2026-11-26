import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSignUp() {
        console.log("Sign Up button clicked");

        if (!name || !email || !password) {
            alert("Please fill all fields!");
            return;
        }

        const user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem("registeredUser", JSON.stringify(user));
        console.log(localStorage.getItem("registeredUser"));

        alert("Registration Successful!");

        console.log("Registered User:", user);

        setName("");
        setEmail("");
        setPassword("");
    }

    return (
        <div>

            <h1>Create Account</h1>

            <Input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <Input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <Input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <Button onClick={handleSignUp}>
                Sign Up
            </Button>

        </div>
    );
}

export default SignUp;
