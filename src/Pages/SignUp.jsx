
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";

const signUpSchema = z.object({
    name: z.string().min(2, "Name must contain at least 2 characters"),
    email: z.email("Enter a valid email address"),
    password: z.string().min(6, "Password must contain at least 6 characters")
});

function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    function handleSignUp(e) {
        e.preventDefault();

        const result = signUpSchema.safeParse({
            name,
            email,
            password
        });

        if (!result.success) {
            setMessage(result.error.issues[0].message);
            return;
        }

        const existingUser = JSON.parse(
            localStorage.getItem("registeredUser")
        );

        if (existingUser && existingUser.email === email) {
            setMessage("This email is already registered. Please login.");
            return;
        }

        const user = {
            name,
            email,
            password
        };

        localStorage.setItem("registeredUser", JSON.stringify(user));

        alert("Registration Successful! Please login.");

        setName("");
        setEmail("");
        setPassword("");

        navigate("/signin");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-5">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border">

                <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
                    Create Account
                </h1>

                <p className="text-center text-gray-500 mb-8">
                    Join TruthLens and start verifying information.
                </p>

                <form onSubmit={handleSignUp} className="space-y-4">

                    <Input
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {message && (
                        <p className="text-sm text-red-600">
                            {message}
                        </p>
                    )}

                    <Button type="submit" className="w-full">
                        Create Account
                    </Button>

                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{" "}
                    <Link to="/signin" className="text-blue-700 font-semibold">
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
}

export default SignUp;
