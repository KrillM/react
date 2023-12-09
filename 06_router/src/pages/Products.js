import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products () {
    const [product, setProduct] = useState(null); 

    const getProducts = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const products = await res.json();
        setProduct(products)
    };

    useEffect(() => {
        getProducts()
    }, []);

    return(
        <>
            {product ? (<> 
            {product.map((value) => (
            <ul key={value.id}>
                <li>#{value.id}: {value.title}</li>
                <li><Link to={`/product/${value.id}`}>상세 페이지</Link></li>
            </ul>))}
            </>) : (<div>Loading...</div>)}
        </>
    );
};