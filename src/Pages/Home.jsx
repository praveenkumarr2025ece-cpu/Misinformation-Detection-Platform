import { useState, useEffect } from 'react';

function Home() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            });

    }, []);

    return (
        <div>
            <h1>User Details</h1>

            {users.map(user => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;