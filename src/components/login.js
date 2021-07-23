import React, { useState, useEffect } from 'react'
// import { createBrowserHistory } from "history"
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import '../App.css'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = ({setOwnerName, ownerName}) => {
    

                                            

    const history = useHistory()

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    // const [users, setUsers] = useState({})

    // const compareFetchToForm = (e) => {
    //     e.preventDefault()
    //     let owner = owners.data.find((a) => a.username == form.username)
    //         history.push(`/Garage/${owner.id}`)
    // }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault()
        setOwnerName(form.username)
        history.push(`/Garage`)   
    }


    return (
        <div className = "sign-up-form">
            <Form onSubmit={ handleSubmit }>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" onChange={ handleChange } name = "username"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" onChange={ handleChange } name = "password"/>
                </Form.Group>
                    <Button variant="primary" type="submit" >
                        Login
                    </Button>
            </Form>
        </div>
    )
}

export default Login