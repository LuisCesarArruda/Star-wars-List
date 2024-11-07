export const loadPosts = async () => {
    const postResponse = fetch(
        "https://akabab.github.io/starwars-api/api/all.json"
    );

    const [posts] = await Promise.all([postResponse]);

    const postjson = await posts.json();
    
    return postjson
}