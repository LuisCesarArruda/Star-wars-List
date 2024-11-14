import { PostCard } from "../Post-card";
import "./styles.css"


export const Posts = ({ posts = [] }) => {


    
    return(<div className="posts">
        {posts.map((post) => (
            <PostCard
                key={post.id}
                id={post.id}
                name={post.name}
                image={post.image}
                altura={"height: " + post.height}
                gender={"gender: " + post.gender}
                homeworld={"homeworld: " + post.homeworld}
                masters = {"masters: " + (post.masters !== undefined ? post.masters : "don't have masters")}
            />
        ))}
    </div>
    )
};
