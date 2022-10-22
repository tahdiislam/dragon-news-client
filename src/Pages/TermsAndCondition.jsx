import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h2>This is our terms and condition.</h2>
            <Link to="/register"><Button>Register</Button></Link>
        </div>
    );
};

export default TermsAndCondition;