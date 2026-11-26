import React,{useState} from 'react'

const Login = () => {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [message, setMessage]=useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(email ==="praveen@gmail.com" && password ==="1234567") {
            setMessage('Login successful!');
        } else {
            setMessage('Invalid email or password.');
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br/>
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <br/>
            <button type="submit">Login</button>
        </form>
        <p>{message}</p>
    </div>
  )
}

export default Login