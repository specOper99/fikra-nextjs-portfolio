import Link from 'next/link';
export default function Products(props) {
    const products = props.products;
    return <div>
        <h1>
            Products List
        </h1>
        <br></br>
        <Link href="/">Go To Home Page</Link>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <ul>
            {products.map(product => <li style={{ cursor: 'pointer' }} key={product.id}><Link href={`/products/${product.id}`}><div><h2>{product.name}</h2><p>{product.description}</p><br></br></div></Link></li>)}
        </ul>
    </div>;
}

export async function getServerSideProps() {
    // this function executes every time
    return { props: { products: await fetch('http://localhost:3000/api/products').then(res => res.json()).catch(res => "No Products Available") } };
}