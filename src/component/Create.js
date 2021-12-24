import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'


function Create({history}) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const postData = (e) => {
        e.preventDefault();
        axios.post("https://61c53b70c003e70017b79621.mockapi.io/user", {
            name,
            email,
            password
        })     
        console.log(email, password)
    }
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={postData}>
                    Submit
  </Button>
            </Form>
        </div>
    )
}

export default Create
