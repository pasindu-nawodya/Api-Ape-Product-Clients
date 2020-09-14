import React from 'react';
import {Link} from 'react-router-dom';

/*
    this is function component this should be delete
*/

export default function UserApp() {
    return (
        <div>
            <Link to={'/adminlogin'}><button>Login</button></Link>
        </div>
    )
}
