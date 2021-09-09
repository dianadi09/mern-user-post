import React, { Component } from 'react';
import axios from 'axios';
import { BASEURL } from '../../consts';

export default class EditPostComponent extends Component {
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
        axios.get(BASEURL + 'posts/' + this.props.match.params.id)
            .then(response => {
                if (response.data.data.length > 0) {
                    let data = response.data.data[0];
                    this.setState({
                        title: data.title,
                        content: data.content,
                        posted_by: data.posted_by
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
        axios.post(BASEURL + 'posts/update/' + this.props.match.params.id, data)
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
                <h3>Edit Post</h3>
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
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.posted_by}
                                onChange={this.onChangePostedBy}
                        />
                    </div>
                    <div className="form-group submit-btn">
                        <input type="submit" value="Edit Post" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}