
import { Component } from 'react';

import './Styles.css';

import { Posts } from "../../components/Posts";
import { Button } from '../../components/Button';



class App extends Component {

  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 2
  };

  componentDidMount() {
    this.loadPost()
  };

  loadPost = async () => {
    const {page, postsPerPage} = this.state

    const postResponse = fetch("https://akabab.github.io/starwars-api/api/all.json")

    const [posts] = await Promise.all([postResponse])

    const postjson = await posts.json()

    this.setState({ 
      posts: postjson.slice(page,postsPerPage),
      allPosts: postjson
    })
  }

  loadMorePosts = () =>{

  }


  render() {
    const { posts } = this.state;

    return (
      <section className="container">
        <Posts posts={posts} />
        <Button/>
      </section>
    );
  }
}
export default App;


