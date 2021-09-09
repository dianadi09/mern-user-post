import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">User Post App</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/posts/" className="nav-link">Posts</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/users/" className="nav-link">Users</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/post/create" className="nav-link">Create Post</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user/create" className="nav-link">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}