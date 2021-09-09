import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {BASEURL} from "../consts";

const Post = props => (
    <tr>
        <td>{props.post.title}</td>
        <td>{props.post.content}</td>
        <td>{props.post.posted_by}</td>
        <td>
            <Link to={"/posts/update/"+props.post._id}>edit</Link> | <a href="#" onClick={() => { props.deletePost(props.post._id) }}>delete</a>
        </td>
    </tr>
)

export default class PostsListComponent extends Component {
    constructor(props) {
        super(props);

        this.deletePost = this.deletePost.bind(this)
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        axios.get(BASEURL + 'posts/')
            .then(response => {
                this.setState({ posts: response.data.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deletePost(id) {
        axios.post(BASEURL + 'posts/delete/'+id)
            .then(response => { console.log(response.data.data)});

        this.setState({
            posts: this.state.posts.filter(el => el._id !== id)
        })
    }

    postsList() {
        return this.state.posts.map(currPost => {
            return <Post post={currPost} deletePost={this.deletePost} key={currPost._id}/>;
        })
    }


    render() {
        return (
            <div>
                <h3>All posts</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Posted By</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.postsList() }
                    </tbody>
                </table>
            </div>
        )
    }
}