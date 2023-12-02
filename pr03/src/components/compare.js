import { useState, useRef } from 'react'

const Silsup3 = () => {
    const input = useRef();
    const crewList = [
        { id:1 , name: 'yena', title: 'title1' },
        { id:2 , name: 'yena', title: 'title2' },
        { id:3 , name: 'yena', title: 'title3' },
    ]

    const [idNum, setIdNum] = useState(4);
    const [originalList, setOriginalList] = useState(crewList); // 원본 리스트 유지
    const [list, setList] = useState(originalList);
    const [newName, setNewName] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [searchType, setSearchType] = useState("name");
    const [searchKeyword, setSearchKeyword] = useState("");

    const addTitle = () => {
        if(newName !== '' && newTitle !== ''){
            const newObj = { id:idNum , name: newName, title: newTitle }
            setIdNum(idNum + 1)
            const newList = list.concat(newObj)
            setOriginalList(newList); // 원본 리스트 갱신
            setList(newList);
            setNewTitle("")
        }
        else{
            input.current.focus();
        }
    }

    const deleteTitle = (id) => {
        const newList = list.filter((value) => value.id !== id);
        setOriginalList(newList); // 원본 리스트 갱신
        setList(newList);
    }

    const search = () => {
        const filteredList = originalList.filter((value) => {
            if (searchType === "name") {
                return value.name.includes(searchKeyword);
            } else if (searchType === "title") {
                return value.title.includes(searchKeyword);
            }
            return false;
        });

        setList(filteredList);
    }

    const resetSearch = () => {
        setSearchKeyword(""); // 검색 키워드 초기화
        setList(originalList); // 리스트를 원본 리스트로 복원
    }

    return(
        <>
            <label>작성자: </label>
            <input ref={input} type='text' value={newName} onChange={(e) => {setNewName(e.target.value)}}/>{" "}
            <label>제목: </label>
            <input ref={input} type='text' value={newTitle} onChange={(e) => {setNewTitle(e.target.value)}}/>{" "}
            <button onClick={addTitle}>작성</button>

            <br/>
            <br/>
            <select name="focus" onChange={(e) => setSearchType(e.target.value)}>
                <option value="name">작성자</option>
                <option value="title">제목</option>
            </select>

            {" "}<input type='text' value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)}/>{" "}
            <button onClick={search}>검색</button>
            <button onClick={resetSearch}>검색 초기화</button>

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

export default Silsup3;
