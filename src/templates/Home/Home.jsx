/* eslint-disable no-unused-vars */

import { Component } from "react";

import "./Styles.css";

import { Posts } from "../../components/Posts";
import { Button } from "../../components/Button";

class App extends Component {
    state = {
        posts: [],
        allPosts: [],
        page: 0,
        postsPerPage: 3,
    };

    componentDidMount() {
        this.loadPost();
    }

    loadPost = async () => {
        const { page, postsPerPage } = this.state;

        const postResponse = fetch(
            "https://akabab.github.io/starwars-api/api/all.json"
        );

        const [posts] = await Promise.all([postResponse]);

        const postjson = await posts.json();

        this.setState({
            posts: postjson.slice(page, postsPerPage),
            allPosts: postjson,
        });
    };

    loadMorePosts = () => {
        const { page, postsPerPage, allPosts, posts, searchValue } = this.state;

        const nextPage = page + postsPerPage;
        const nextsPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
        posts.push(...nextsPosts);

        this.setState({ posts, page: nextPage });
    };

    handleChange = (e) => {
        const { value } = e.target;

        this.setState({ searchValue: value });
    };

    render() {
        const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
        const noMorePost = page + postsPerPage >= allPosts.length;

        const filteredPosts = !!searchValue
            ? allPosts.filter((post) => {
                  return post.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase());
              })
            : posts;

        return (
            <section className="container">
                {!!searchValue && <h1>Search characters {searchValue}</h1>}

                <input
                    onChange={this.handleChange}
                    value={searchValue}
                    type="search"
                />

                {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}

                {filteredPosts.length === 0 && <p>not exist this charectes </p>}


                <div className="btn-container">
                    {!searchValue && (
                        <Button
                            onClick={this.loadMorePosts}
                            text={"Load more"}
                            disabled={noMorePost}
                        />
                    )}
                </div>
            </section>
        );
    }
}
export default App;
