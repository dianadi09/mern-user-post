import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar/navbar.component"
import CreateUser from './components/create-user/create-user.component';
import CreatePost from './components/create-post/create-post.component';
import PostsList from './components/posts-list/posts-list-component';
import UsersList from './components/users-list/users-list.component';
import EditPost from './components/edit-post/edit-post.component';
import EditUser from './components/edit-user/edit-user.component';


function App() {
    return (
        <Router>
            <div className="container">
                <Navbar />
                <br/>
                <Route path="/posts/" exact component={PostsList} />
                <Route path="/users/" exact component={UsersList} />
                <Route path="/posts/update/:id" component={EditPost} />
                <Route path="/users/update/:id" component={EditUser} />
                <Route path="/post/create" component={CreatePost} />
                <Route path="/user/create" component={CreateUser} />
            </div>
        </Router>
    );
}

export default App;
