import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Profile() {
    const [info, setInfo] = (" ");
    const [id, setId] = (null)

    useEffect(() => {
        setId(localStorage.getItem('ID'))
    },[])
    const postProfile = () => {
        axios.post("https://61c53b70c003e70017b79621.mockapi.io/profile", {
            id: id,
            info: info
        })
    }
    return (
        <div>
            <form>
                <label>Profile Information</label>
                <input type = "text" value = {info} onChange = {(e) => setInfo(e.target.value)}/>                
                <input type = "submit" onClick = {postProfile}/>
            </form>
        </div>
    )
}

export default Profile
