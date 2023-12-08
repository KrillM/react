
import { useState, useCallback } from 'react';

export default function Haedap02() {
    const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
    const [editing, setEditing] = useState(null);
    const [editText, setEditText] = useState('');

    // item 문자열을 인자로 받아 editing, setEditText 상태의 값을 item 문자열로 업데이트
    const handleEdit = useCallback((item) => {
        setEditing(item);
        setEditText(item);
    }, []);

    // itemToSave 문자열을 인자로 받아 items 상태의 배열 요소 중
    // editing과 동일한 요소만 itemToSave로 변경하고
    // 나머지 요소는 그대로 유지한 배열을 items 상태값으로 업데이트
    const handleSave = useCallback(
        (itemToSave) => {
        setItems(items.map((item) => (item === editing ? itemToSave : item)));
        setEditing(null);
        },
        [items, editing]
    );

    // itemToDelete 문자열을 인자로 받아 items 상태의 배열 요소 중
    // itemToDelete와 동일하지 않은 요소로만 이루어진 배열을 items 상태값으로 업데이트
    const handleDelete = useCallback(
        (itemToDelete) => {
        setItems(items.filter((item) => item !== itemToDelete));
        },
        [items]
    );

    return (
        <ul>
        {items.map((item) => (
            <li key={item}>
            {editing === item ? (
                <input type='text' value={editText} onChange={(e) => setEditText(e.target.value)}/>
            ) : (
                item
            )}
            {editing === item ? (
                <button onClick={() => handleSave(editText)}>Save</button>
            ) : (
                <>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item)}>Delete</button>
                </>
            )}
            </li>
        ))}
        </ul>
    );
}