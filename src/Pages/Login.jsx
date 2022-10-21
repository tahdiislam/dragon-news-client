import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const [error, setError] = useState(null)
    const { logInWithEmailPass } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    // log in with email and pass
    const handleFormSubmit = event => {
        setError(null)
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        logInWithEmailPass(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.error(error.message)
                setError(error.message)
            })
    }
    return (
        <div className='d-flex justify-content-center'>
            <Form onSubmit={handleFormSubmit} className='border w-75 p-4 rounded shadow'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p><small>{error?.split('Firebase:').join('').split('(auth/').join('').split('-').join(' ').split(')').join('').split('Error').join('Error:')}</small></p>
            </Form>
        </div>
    );
};

export default Login;