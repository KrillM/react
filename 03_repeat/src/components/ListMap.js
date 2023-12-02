import {useState} from 'react'

const ListMap = () => {
    const prodList = [
        { id: 1, list: '가방'},
        { id: 2, list: '신발'},
        { id: 3, list: '패딩'},
        { id: 4, list: '상의'},
        { id: 5, list: '하의'}
    ]
    const [list, setList] = useState(prodList);
    const [newProd, setNewProd] = useState("")

    const addProd = () => {
        // 원래는 새 상품을 be에서 insert하고 생긴 고유 pk를 id에 담아야 하지만 임시로 한다.
        const newObj = { id:list.length+1, list:newProd }
        // const newList = [...list, newObj] // ...list 오오오오오
        const newList = list.concat(newObj)
        setList(newList);
        setNewProd("")
    }

    const deleteProd = (id) => {
        // filter 메소드는 앞에 있는 배열에 대해 반복한다.
        // filter 메소드의 return값은 조건이 되어야 한다.
        // 조건이 맞을 경우(true) 해당 원소는 새로운 배열에 포함이 되고,
        // 그렇지 않을 경우(false) 새로운 배열에 포함하지 않는다. 
        const newList = list.filter((value) => {return value.id != id;})
        setList(newList)
    }

    // map은 앞에 있는 배열에 대해 반복하면서,
    // map의 인자로 넘어가는 callback함수의 return값을 이용해 새로운 배열을 생성한다.
    // [<li>1</li>, <li>2</li>, <li>3</li>]
    return(
        <>
            <label>추가할 상품: </label>
            <input type='text' value={newProd} onChange={(e) => {setNewProd(e.target.value)}}/>{" "}
            <button onClick={addProd}>추가</button>
            <ul>
                {list.map((value) => {
                    return <li key={value.id} onDoubleClick={() => deleteProd(value.id)}>{value.list}</li>;
                })}
            </ul>
        </>
    );
}

export default ListMap;