import {useState} from 'react'

const Silsup1 = () => {
    const crewList = [
        {name: 'yena', email: 'oberreiden7@gmail.com'}
    ]

    const [list, setList] = useState(crewList);
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");

    const addCrew = () => {
        const newObj = { name: newName, email: newEmail }
        const newList = list.concat(newObj)
        setList(newList)
        setNewName("")
        setNewEmail("")
    }

    const deleteCrew = (name) => {
        const newList = list.filter((value) => {return value.name != name;})
        setList(newList)
    }

    return(
        <>
            <label>이름: </label>
            <input type='text' value={newName} onChange={(e) => {setNewName(e.target.value)}}/>{" "}
            <label>이메일: </label>
            <input type='text' value={newEmail} onChange={(e) => {setNewEmail(e.target.value)}}/>{" "}
            <button onClick={addCrew}>추가</button>
            
            <ul>
                {list.map((value) => {
                    return <li key={value.name} onDoubleClick={() => deleteCrew(value.name)}>{value.name} : {value.email}</li>;
                })}
            </ul>
        </>
    );
}

export default Silsup1;