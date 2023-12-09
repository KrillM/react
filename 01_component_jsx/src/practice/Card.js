function Card({title, author, price, type}){
    return(
        <>
        <div class="Card__design">
            <h2>이번주 베스트셀러</h2>
            <img src="/logo192.png" />
            <h3>{title}</h3>
            <p>저자: {author}</p>
            <p>판매가: {price}</p>
            <p>구분: {type}</p>
        </div>
        </>
    );
}

export default Card;