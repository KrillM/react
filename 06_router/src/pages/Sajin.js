import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function Sajin() {
    const {id} = useParams();
    const [photo, setPhoto] = useState(); 
    const [error, setError] = useState("Loading...")

    const navigator = useNavigate();

    const getProduct = async() => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);

            if(res.ok) {
                const prod = await res.json() 
                setPhoto(prod);
            } else {
                throw Error("마구니로 가득한 사진은 금지입니다.")
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
            <button onClick={() => navigator("/photos")}>목록으로</button>
            <button onClick={() => navigator("/")}>집으로</button>
            {photo ? (
                <>
                    <h3>{photo.title}</h3>
                    <p>{photo.body}</p>
                    <img src={photo.url} />
                </>
            ) : (<div>{error}</div>)}
        </>
    )
}