import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../Context/AuthProvider';

const Register = () => {
    const { createUserWithEmailPass, setUserName } = useContext(AuthContext)

    // log in with email and pass
    const handleFormSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        // console.log(email, password);

        createUserWithEmailPass(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUserName(name)
                .then(() => {
                    // set name
                })
                .catch(error => console.error(error.message))
            })
            .catch(error => console.error(error.message))
    }
    return (
        <div className='d-flex justify-content-center'>
            <Form onSubmit={handleFormSubmit} className='border w-75 p-4 rounded shadow'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Register;