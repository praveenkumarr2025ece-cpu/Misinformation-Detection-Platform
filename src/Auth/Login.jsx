
import React, { useState } from 'react';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const userSchema = z.object({
    email: z.email(),
    password: z.string().min(6)
});

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        // Step 1: Validate input using Zod
        const result = userSchema.safeParse({
            email,
            password
        });

        if (!result.success) {
            setMessage(result.error.issues[0].message);
            return;
        }

        // Step 2: Get registered user
        const existingUser = JSON.parse(
            localStorage.getItem('registeredUser') || 'null'
        );

        // Step 3: Check whether account exists
        if (!existingUser) {
            setMessage('No account found. Please sign up first.');
            return;
        }

        // Step 4: Check email and password
        if (
            existingUser.email.toLowerCase() === email.trim().toLowerCase() &&
            existingUser.password === password
        ) {
            // Step 5: Login successful
            setMessage('Login successful!');

            navigate('/home');
        } else {
            setMessage('Invalid email or password.');
        }
    }

    return (
        <div>

            <h2 className="text-xl font-semibold text-center mb-5">
                Welcome Back!
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

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
                    <p className="text-sm text-center text-red-600">
                        {message}
                    </p>
                )}

                <Button type="submit" className="w-full">
                    Login
                </Button>

            </form>

        </div>
    );
}

export default Login;
