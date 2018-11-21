import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
      posts: [],
      selectedPostId: null
    };

    postSelected = (id) => {
      console.log('id', id);
      this.setState({selectedPostId: id});
    };

    componentDidMount () {
      axios.get('https://jsonplaceholder.typicode.com/posts')
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
        });
    }
    render () {
        const posts = this.state.posts.map( post => {
          return <Post key={post.id}
                       title={post.title}
                       author={post.author}
                       clicked={() => this.postSelected(post.id)}/>
        });
        return (
            <div>
                <section className="Posts">
                  {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;