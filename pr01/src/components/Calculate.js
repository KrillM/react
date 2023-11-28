function Calculate(){
    const a=10;
    const b=12;

    return (
        // <div>
        //     {/* { 3+5 === 8 ? '정답입니다' : '오답입니다'}! */}
        //     {/* { a>b && "a가 b보다 큽니다."} */}
        // </div>

        <>
        <header>
            <h1 class="colour">Hello World</h1>
        </header>

        <form>
            아이디: <input type="text" name="id"></input><br/>
            비밀번호: <input type="password" name="pw"></input>
        </form>
        </>
    );
}

export default Calculate;