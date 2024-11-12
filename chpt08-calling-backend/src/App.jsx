import React, { Component } from "react";
import './App.css'
import http from "./services/httpService";
import config from "./userConfig/config.json"


class App extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        // a promise is in pending state followed by success or rejected
        const promise = http.get(config.apiEndpoint);
        console.log(promise)
        const response = await promise;
        this.setState({posts:response.data});
    }

    handleAdd = async () => {
        console.log("Add");
        const obj= {title : 'a', body:'b'}
        const promise = await http.post(config.apiEndpoint , obj);
        console.log(promise.data);
        this.setState({posts: [promise.data, ...this.state.posts]});
    };

    handleUpdate = async (post) => {
        console.log("Update", post);
        post.title= "UPDATED";
        const promise = await http.put(config.apiEndpoint + post.id , post);
        console.log(promise.data);
        const posts= [...this.state.posts];
        const index = posts.indexOf(post);
        posts[index] = {...post}
        this.setState({posts : posts});
    };

    handleDelete = async (post) => {
        console.log("Delete", post);

        const originalPosts = this.state.posts;
        // update the UI with the removed post
        const posts= this.state.posts.filter(p => p.id !== post.id);
        this.setState({posts : posts});

        // send the delete request, and if that fails, simply restore the UI to the previous state
        try {
            const promise = await http.delete(config.apiEndpoint + post.id);
        } catch (exception ){
            if (exception.response && exception.response.status === 404){
                alert("This post was deleted");
            } else {
                alert('Error occured when deleting the post');
            }
            this.setState({posts : originalPosts});
        }

    };

    render() {
        return (
            <React.Fragment>
                <button className="btn btn-primary" onClick={this.handleAdd}>
                    Add
                </button>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>
                                <button
                                    className="btn btn-info btn-sm"
                                    onClick={() => this.handleUpdate(post)}
                                >
                                    Update
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => this.handleDelete(post)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default App
