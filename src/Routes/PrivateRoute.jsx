import React, { useContext } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading){
        return <div className='d-flex justify-content-center my-4'>
            <Button variant="info" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        </div>
    }
    if (user && user.emailVerified){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace/>
};

export default PrivateRoute;