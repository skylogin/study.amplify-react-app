import React, { useEffect } from 'react';
import { Auth } from 'aws-amplify';

import Continer from './Container';


function Protected(props){
    useEffect(() => {
        Auth.currentAuthenticatedUser().catch(() => {
            props.history.push('/profile');
        });
    }, []);

    return (
        <Continer>
            <h1>Protected route</h1>
        </Continer>
    )
}

export default Protected;