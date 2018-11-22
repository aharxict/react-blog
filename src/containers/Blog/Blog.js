import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route, NavLink } from 'react-router-dom';
// import axios from 'axios'

// import Post from '../../components/Post/Post';
import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    render () {

        return (
            <div>
              <header className="Blog">
                <nav>
                  <ul>
                    <li><NavLink exact activeClassName="active" to="/" >Home</NavLink></li>
                    <li><NavLink exact to={{
                      pathname: '/new',
                      // pathname: this.props.match.url + 'new', // relative location
                      // hash: '#submit',
                      // search: '?quick-submit=true'
                    }} >New post</NavLink></li>
                  </ul>
                </nav>
              </header>
              <Route path="/" exact component={Posts} />
              <Route path="/new" exact component={NewPost} />
              <Route path="/:id" exact component={FullPost} />
                {/*<section>*/}
                    {/*<FullPost id={this.state.selectedPostId} />*/}
                {/*</section>*/}
                {/*<section>*/}
                    {/*<NewPost />*/}
                {/*</section>*/}
            </div>
        );
    }
}

export default Blog;