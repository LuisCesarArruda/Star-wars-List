import "./style.css"

export const PostCard = ({id,name,height,gender,homeworld,masters, image}) => {
    
    return (
        <div className="post">
            
            <img src={image} alt={name} />
            <div className="post-content">
                <h2>{name}</h2>
                <p>{height}</p>
                <p>{gender}</p>
                <p>{homeworld}</p>
                <p>{masters}</p>
            </div>
        </div>
    );
};
