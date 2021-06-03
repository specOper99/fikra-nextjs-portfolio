import Link from 'next/link';

export default function Products(props) {
    const product = props.product;
    return <div>
        <h1>
            Product {product.id}
        </h1>
        <br></br>
        <Link href="./">Go To Products Page</Link>
        <hr></hr>
        <h2>{product.name}</h2>
        <hr></hr>
        <h3>{product.description}</h3>
    </div>;
}

export async function getStaticPaths() {
    const paths = [...await fetch('http://localhost:3000/api/products').then(res => res.json()).catch(res => [{ id: "none" }])].map(prod => {return { params: { id: prod.id } } });
    console.log(paths);
    return { paths, fallback: false };
}

export async function getStaticProps(context) {
    const { id } = context.params;
    // this function executes when build only
    return { props: { product: await fetch('http://localhost:3000/api/products/' + id).then(res => res.json()).catch(res => "No Products Available") } };
}