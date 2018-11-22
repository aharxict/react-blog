import React, { Component } from "react";
import axios from "axios";
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Link } from 'react-router-dom';

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null
  };

  postSelected = (id) => {
    console.log('id', id);
    this.setState({selectedPostId: id});
  };

  componentDidMount () {
    console.log('props', this.props);
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 10);
        const updatedPosts = posts.map( post => {
          let authorName = (post.id === 1) ? 'Max' : 'Manu';
          return {
            ...post,
            author: authorName
          }
        });

        this.setState({posts: updatedPosts});
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const posts = this.state.posts.map( post => {
      return <Link to={'/' + post.id} key={post.id}>
           <Post title={post.title}
                 author={post.author}
                 clicked={() => this.postSelected(post.id)}
           />
            </Link>
    });

    return (
      <section className="Posts">
        {posts}
      </section>
    );
  }
}

export default Posts;

