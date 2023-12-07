import { useCallback, useEffect, useState } from "react";

export default function UseCallbackEx2 ({ postId }) {
    const [post, setPost] = useState();
    const [text, setText] = useState("");

    const fetchData = useCallback(async () => {
        console.log("aaaaaaaaaaa")
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        const post = await res.json();
        setPost(post);
    }, [postId]);

    useEffect(() => {fetchData()}, [fetchData]);

    return (
    <>  
        <h2>useCallback 공부2</h2>
        <div>조회한 postId: {postId}</div>
        {post && (
            <div>
                <div>id: {post.id}</div>
                <div>title: {post.title}</div>
                <div>body: {post.body}</div>
            </div>)}
    </>
    )
}

// useMemo: 특정 값을 기억하여 불필요한 재선언 방지
// useCallback: 특정 함수를 기억하여 불필요한 재설정 방지