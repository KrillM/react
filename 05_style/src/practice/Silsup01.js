import { useMemo, useState } from "react";

export default function Silsup01 () {
    const [text1, setText1] = useState('')
    const [text2, setText2] = useState('')
    const [count, setCount] = useState(0)

    const conuting = useMemo(() => {
        let top = text1;
        let bottom = text2;
        const counted = (top.match(new RegExp(bottom, 'g')) || []).length;
        setCount(counted);
    }, [text1, text2])

    return (
    <> 
        <input type="text" value={text1} onChange={(e) => setText1(e.target.value)} /><br/>
        <input type="text" value={text2} onChange={(e) => setText2(e.target.value)} /><br/>
        <div>
            "{text2}" 단어의 빈도수: {count}
        </div>
    </>)
}