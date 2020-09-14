import React from 'react';
import {Link} from 'react-router-dom';

export default function UserApp() {
    return (
        <div>
            <Link to={'/adminlogin'}><button>Login</button></Link>
        </div>
    )
}
