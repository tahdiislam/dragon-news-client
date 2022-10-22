import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Register = () => {
    const [error, setError] = useState(null)
    const [checked, setChecked] = useState(false)
    const { createUserWithEmailPass, updateUserProfile, emailVerification } = useContext(AuthContext)

    // log in with email and pass
    const handleFormSubmit = event => {
        setError(null)
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        // console.log(email, password);

        const profile = { displayName: name, photoURL: photoUrl}
        createUserWithEmailPass(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserProfile(profile)
                .then(() => {
                    // profile updated
                    emailVerification()
                    toast.success('User created successfully please verify your email!!')
                })
                .catch(error => {
                    console.error(error.message)
                    setError(error.message)
                })
                form.reset()
            })
            .catch(error => {
                console.error(error.message)
                setError(error.message)
            })
    }

    // handle check 
    const handleCheck = event => {
        setChecked(event.target.checked);
    }
    return (
        <div className='d-flex justify-content-center'>
            <Form onSubmit={handleFormSubmit} className='border w-75 p-4 rounded shadow'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photoUrl" type="text" placeholder="Enter your photo url" required/>
                </Form.Group>
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleCheck} type="checkbox" label={<>Accept <Link to="/terms">Terms and condition</Link></>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!checked}>
                    Submit
                </Button>
                <p><small>{error?.split('Firebase:').join('').split('(auth/').join('').split('-').join(' ').split(')').join('')}</small></p>
            </Form>
        </div>
    );
};

export default Register;