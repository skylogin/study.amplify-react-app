import React from 'react';

import Continer from './Container';
import protectedRoute from './protectedRoute';


function Protected(props){
    return (
        <Continer>
            <h1>Protected route</h1>
        </Continer>
    )
}

export default protectedRoute(Protected);