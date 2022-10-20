import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const RightSideNav = () => {
    return (
        <ButtonGroup vertical>
            <Button variant="outline-primary">Log in with Google</Button>
            <Button variant="outline-dark">Log in with GitHub</Button>
        </ButtonGroup>
    );
};

export default RightSideNav;