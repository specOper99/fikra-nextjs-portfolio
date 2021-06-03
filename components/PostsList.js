// import Blog from '../models/blog';

export default function (props) {
    // const blog = props.blog;
    const blog = [
        { title: "It's not working", content: "This is the only post for me", imagePath: "https://picsum.photos/500" },
        { title: "It's not working 2", content: "This is the only post for me after the 1 before", imagePath: "https://picsum.photos/550" },
        { title: "It's not working 3", content: "This is the only post for me after the 2 before", imagePath: "https://picsum.photos/555" }
    ];

    console.log(blog);

    return (<section className="posts-list">
        <div className="container">
            <h3 className="title">Blog</h3>
            <ul className="posts">
                {/* {blog.array.forEach(element => ( */}
                {blog.map(element => (
                    <li key={blog.indexOf(element)} className="post">
                        <div className="post-img-wrap">
                            <div className="post-img" data-img-src={`${element.imagePath}`}></div>
                        </div>
                        <h5>{element.title}</h5>
                        <a href="post">{element.content}</a>
                    </li>
                ))}
            </ul>
        </div>
    </section >
    );
}


// export async function getStaticPaths() {
//     // const paths = [...await fetch('http://localhost:3000/api/products').then(res => res.json()).catch(res => [{ id: "none" }])].map(prod => { return { params: { id: prod.id } } });
//     Blog.find().sort()
//     console.log(paths);
//     return { paths, fallback: false };
// }

// export async function getStaticProps(context) {
//     const { id } = context.params;
//     // this function executes when build only
//     return { props: { product: await fetch('http://localhost:3000/api/products/' + id).then(res => res.json()).catch(res => "No Products Available") } };
// }