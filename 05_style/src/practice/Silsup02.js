import { useCallback, useEffect, useState } from "react";

const tables = [
    {
      id: 1,
      body: 'item1',
    },
    {
      id: 2,
      body: 'item2',
    },
    {
      id: 3,
      body: 'item3',
    },
]

export default function Silsup02 () {
    const [items, setItems] = useState(tables);
    const [editItemId, setEditItemId] = useState(null);

    const fetchData = useCallback(async () => {
        setItems(tables);
    }, [setItems]);

    useEffect(() => {fetchData()}, [fetchData]);

    const editList = (id) => {
        setEditItemId(id);
    };
    
    const deleteList = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
    };
    
    const saveList = (id, newValue) => {
        const updatedItems = items.map((item) =>
            item.id === id ? { ...item, body: newValue } : item
        );
        setItems(updatedItems);
        setEditItemId(null);
    };

    return (
    <>  
        <ul>
            {items.map((item) => (
            <li key={item.id}>
                    {editItemId === item.id ? (
                <>
                    <input type="text" value={item.body} onChange={(e) => saveList(item.id, e.target.value)}/>
                    <button type="button" onClick={() => saveList(item.id, item.body)}>저장</button>
                </>
                ) : (
                <>
                    {item.body}{" "}
                    <button type="button" onClick={() => editList(item.id)}>편집</button>
                    <button type="button" onClick={() => deleteList(item.id)}>삭제</button>
                </>
                )}
            </li>
            ))}
        </ul>
    </>
    )
}
