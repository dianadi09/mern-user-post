import React, { Component } from 'react';
import axios from 'axios';
import { BASEURL } from '../../consts';
import './create-user.css';

export default class CreateUserComponent extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            country: '',
            city: ''
        }
    }

    resetState() {
        this.setState({
            name: '',
            email: '',
            country: '',
            city: ''
        })
    }

    getUserData() {
        return {
            name: this.state.name,
            email: this.state.email,
            country: this.state.country,
            city: this.state.city,
        }
    }

    onSubmit(e) {
        e.preventDefault();

        let data = this.getUserData();
        axios.post(BASEURL + 'users/create', data)
            .then(res => console.log(res.data));

        this.resetState();
    }

    onChangeUsername(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangeCountry(e) {
        this.setState({
            country: e.target.value
        })
    }

    onChangeCity(e) {
        this.setState({
            city: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>City: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.city}
                                onChange={this.onChangeCity}
                        />
                    </div>
                    <div className="form-group">
                        <label>Country: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.country}
                                onChange={this.onChangeCountry}
                        />
                    </div>
                    <div className="form-group submit-btn">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}