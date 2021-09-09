import React, { Component } from 'react';
import axios from 'axios';
import { BASEURL } from '../../consts';
import './create-post.css';

export default class CreatePostComponent extends Component {
    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onChangePostedBy = this.onChangePostedBy.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            content: '',
            posted_by: '',
            users_list: [],
        }
    }

    componentDidMount() {
        axios.get(BASEURL + 'users/')
            .then(response => {
                if (response.data.data.length > 0) {
                    this.setState({
                        users_list: response.data.data.map(user => user.name),
                        posted_by: response.data.data[0].name
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    resetState() {
        this.setState({
            title: '',
            content: '',
            posted_by: '',
        })
    }

    getPostData() {
        return {
            title: this.state.title,
            content: this.state.content,
            posted_by: this.state.posted_by,
        }
    }

    onSubmit(e) {
        e.preventDefault();

        let data = this.getPostData();
        axios.post(BASEURL + 'posts/create', data)
            .then(res => console.log(res.data));

        this.resetState();
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeContent(e) {
        this.setState({
            content: e.target.value
        })
    }

    onChangePostedBy(e) {
        this.setState({
            posted_by: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h3>Create New Post</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Title: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Content: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.content}
                                onChange={this.onChangeContent}
                        />
                    </div>
                    <div className="form-group">
                        <label>Posted By: </label>
                        <select
                                required
                                className="form-control"
                                value={this.state.posted_by}
                                onChange={this.onChangePostedBy}>
                            {
                                this.state.users_list.map(function(user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group submit-btn">
                        <input type="submit" value="Create Post" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}