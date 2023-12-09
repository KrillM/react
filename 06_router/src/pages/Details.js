import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function Details () {
    const {id} = useParams();
    const [product, setProduct] = useState(); 
    const [error, setError] = useState("Loading...")

    // 쿼리를 가져오고 싶을 때
    const [query, setQuery] = useSearchParams();
    console.log(query); // URLSearchParams {size: 1}
    console.log(query.get("name")); // krille

    // Link 컴포넌트를 이용하지 않고, js 함수 내부에서 페이지를 이동하는 코드를 작성해야할 때 사용한다.
    const navigator = useNavigate();

    const getProduct = async() => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

            if(res.ok) {
                const prod = await res.json() 
                setProduct(prod);
            } else {
                throw Error("우리 회사에서 판매하지 않는 상품입니다.")
            }
        } catch(error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        getProduct()
    },[])

    return(
        <>
            {/* setQuery는 인자로 보내준 정보를 이용하여 새로운 쿼리를 만들고 이동한다. */}
            {/* <button onClick={() => setQuery({name: "krille", id: 5})}>setQuery Test</button> */}
            <button onClick={() => navigator("/products")}>목록으로</button>
            <button onClick={() => navigator("/")}>집으로</button>
            {product ? (
                <>
                    <h3>{product.title}</h3>
                    <p>{product.body}</p>
                </>
            ) : (<div>{error}</div>)}
        </>
    );
};