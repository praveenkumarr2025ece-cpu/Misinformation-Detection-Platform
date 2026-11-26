
import { useState, useEffect } from 'react';

function About() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {
                setPosts(data.slice(0, 5));
            });

    }, []);

    return (
        <div>
            <h1>About Us</h1>

            <p>Welcome to our platform!</p>

            <h2>Our Latest Posts</h2>

            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default About;
