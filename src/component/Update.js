import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

function Update() {
    const [id, setId] = useState(null)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    
    useEffect(() => {
        setId(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'))
        setEmail(localStorage.getItem('Email'))       
    },[])

    const updateApiData = (e) => {
        e.preventDefault();
        console.log(id)
        axios.put(`https://61c53b70c003e70017b79621.mockapi.io/user/${id}`,{            
            name,
            email
        })
    }

    return (
        <div>
            <h2>Update User Details</h2>
            <Form>
               
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="name" placeholder="Name"  onChange={(e) => setName(e.target.value)} value = {name} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)} value = {email} />

                </Form.Group>

                <Button variant="primary" type="submit" onClick = {updateApiData} >
                   Update
  </Button>
            </Form>

        </div>
    )
}

export default Update
