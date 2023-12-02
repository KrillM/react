import { useState, useRef } from 'react'

const Silsup2 = () => {
    const input = useRef();
    const crewList = [

    ]

    const [idNum, setIdNum] = useState(1);
    const [list, setList] = useState(crewList);
    const [newName, setNewName] = useState("");
    const [newTitle, setNewTitle] = useState("");

    const addTitle = () => {
        if(newName !== '' && newTitle !== ''){
            const newObj = { id:idNum , name: newName, title: newTitle }
            setIdNum(idNum + 1)
            const newList = list.concat(newObj)
            setList(newList)
            setNewTitle("")
        }
        else{
            input.current.focus();
        }
    }

    const deleteTitle = (id) => {
        const newList = list.filter((value) => {return value.id != id;})
        setList(newList)
    }

    return(
        <>
            <label>작성자: </label>
            <input ref={input} type='text' value={newName} onChange={(e) => {setNewName(e.target.value)}}/>{" "}
            <label>제목: </label>
            <input ref={input} type='text' value={newTitle} onChange={(e) => {setNewTitle(e.target.value)}}/>{" "}
            <button onClick={addTitle}>작성</button>

            <table>
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>작성자</td>
                        <td>제목</td>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value) => (
                        <tr key={value.id} onDoubleClick={() => deleteTitle(value.id)}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Silsup2;