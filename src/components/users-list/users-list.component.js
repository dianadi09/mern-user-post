import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {BASEURL} from "../consts";

const User = props => (
    <tr>
        <td>{props.user.name}</td>
        <td>{props.user.email}</td>
        <td>{props.user.country}</td>
        <td>{props.user.city}</td>
        <td>
            <Link to={"/users/update/"+props.user._id}>edit</Link> | <a href="#" onClick={() => { props.deleteUser(props.user._id) }}>delete</a>
        </td>
    </tr>
)

export default class UsersListComponent extends Component {
    constructor(props) {
        super(props);

        this.deleteUser = this.deleteUser.bind(this)
        this.state = {users: []};
    }

    componentDidMount() {
        axios.get(BASEURL + 'users/')
            .then(response => {
                this.setState({ users: response.data.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteUser(id) {
        axios.post(BASEURL + 'users/delete/'+id)
            .then(response => { console.log(response.data.data)});

        this.setState({
            users: this.state.users.filter(el => el._id !== id)
        })
    }

    usersList() {
        return this.state.users.map(currUser => {
            return <User user={currUser} deleteUser={this.deleteUser} key={currUser._id}/>;
        })
    }


    render() {
        return (
            <div>
                <h3>All users</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>City</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.usersList() }
                    </tbody>
                </table>
            </div>
        )
    }
}