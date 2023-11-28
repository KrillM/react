// const FunComponent = () => {
//     return <div>This is Functional Component.</div>
// };

// 9. 동일 폴더 이미지 불러오기
import img from "./cat.avif"

function FunComponent () {
    const text = "Hello";
    const name = "yena";

    // 3. 복잡한 코드는 외부 함수에서 작성한 후 return
    const ifRenderTest = () => {
        if(name === 'krille'){
            return '반가워 크릴';
        }
        else if(name === 'yena'){
            return (
                <div>
                    {/* 5. inline style 적용 방법 */}
                    <span style={{fontSize: '32px', color: 'red'}}>레데리 개꿀잼</span>
                </div>
            );
        }
        else{
            return "누구인가?";
        }
    }

    function clickHere () {
        alert("hello");
    }

    const style = {fontSize: '32px', color: 'crimson'};

    // 1. 하나의 태그로 감싸서 return (필수!)
    return (
        <>
            {/* 2. js 문법 사용이 가능하나 if문과 for문 등 두 줄 이상 사용할 수 없다. */}
            <h3> {text} {text === 'Hello' ? ' World' : '세상'}</h3>

            {/* 3. 복잡한 문법을 사용하는 방법은 다음과 같다. */}
            <p>{ifRenderTest()}</p>

            <div>Functional Component 1</div>
            <div>Functional Component 2</div>

            {/* 4. 조건에 따른 랜더링 && */}
            <h5>{name === 'yena' && "반가워 크릴"}</h5>
            <div style={style}>고려대학교</div>

            {/* 6. css의 class */}
            <span className="test-css">
                JSX에서 CSS 사용하기
            </span>

            {/* 7. 종료 tag 필수 */}
            <br/>
            {/* public 폴더에서 이미지 불러오기 */}
            <img src="/logo192.png" />

             {/* 동일한 폴더에서 이미지 불러오기 */}
            <img src={img} />


            {/* 8. onclick - html에서는 함수를 '호출', jsx에서는 함수를 '선언' */}
            <button onClick={clickHere}>
                Click Here
            </button>
        </>
    );
}

export default FunComponent;