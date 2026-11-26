import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {

        e.preventDefault();

        if (!name || !email || !message) {
            alert("Please fill all fields!");
            return;
        }

        const contactData = {
            name: name,
            email: email,
            message: message
        };

        console.log("Contact Details:", contactData);

        alert("Your message has been submitted successfully!");

        setName("");
        setEmail("");
        setMessage("");
    }

    return (

        <div>

            <h1>Contact Us</h1>

            <form onSubmit={handleSubmit}>

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

                <textarea
                    placeholder="Enter Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />

                <br /><br />

                <Button type="submit">
                    Submit Message
                </Button>

            </form>

        </div>

    );
}

export default Contact;
