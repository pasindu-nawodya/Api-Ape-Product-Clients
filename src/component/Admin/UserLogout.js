import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class UserLogout extends Component {
    render() {
        return (
            <div>
                <h1>Welcome TO Api Ape Product</h1>
                <Link to={'/adminlogin'}><button>Logout</button></Link>
            </div>
        )
    }
}
