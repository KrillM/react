import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Album() {
    const [photo, setPhoto] = useState(null); 

    const getAlbum = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos")
        const album = await res.json();
        setPhoto(album)
    };

    useEffect(() => {
        getAlbum()
    }, []);

    return(
        <>
            {photo ? (<> 
            {photo.map((value) => (
            <ul key={value.id}>
                <li>#{value.id}: {value.title}</li>
                <li><Link to={`/photo/${value.id}`}>상세 페이지</Link></li>
            </ul>))}
            </>) : (<div>Loading...</div>)}
        </>
    )
}