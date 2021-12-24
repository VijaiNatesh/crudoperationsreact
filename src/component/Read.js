import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Read() {
    const [apiData, setApiData] = useState([]);
  
    useEffect(() => {
        axios.get("https://61c53b70c003e70017b79621.mockapi.io/user")
            .then(response => {
                setApiData(response.data)
            })
    }, [])
    const setData = (data) => {
        let {id, name, email} = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Email', email)
        console.log(data)
    }
    const onDelete = (id) => {
        axios.delete(`https://61c53b70c003e70017b79621.mockapi.io/user/${id}`)
        .then(() => {
            getData()
        })
    }
    const getData = () => {
        axios.get("https://61c53b70c003e70017b79621.mockapi.io/user")
        .then(getData => {
            setApiData(getData.data)
        })
    }
   
    return (
        <div>
            <Table className="w-75 mx-auto pt-3" striped bordered hover>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {apiData.map(data => {
                        return (
                            <tr key = {data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <Link to ='/update'>
                                <td> <button onClick = {() => setData(data)}>Update</button></td>
                                </Link>
                                <td><button onClick = {() => onDelete(data.id)}>Delete</button></td>
                                
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
           

        </div>
    )
}

export default Read
