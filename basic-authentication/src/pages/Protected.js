import React from 'react';

import Continer from '../components/Container';
import protectedRoute from '../Hooks/protectedRoute';


function Protected(props){
    return (
        <Continer>
            <h1>Protected route</h1>
        </Continer>
    )
}

export default protectedRoute(Protected);