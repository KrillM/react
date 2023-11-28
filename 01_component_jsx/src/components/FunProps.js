// 방법 1
// function FunProps(props) {
//     return (
//         <>
//             <h3>Use Functional Component</h3>
//             <div> {props.title} </div>
//             <div> {props.content} </div>
//         </>
//     );
// }

// 방법 2
// function FunProps({title, content}) {
//     return (
//         <>
//             <h3>Use Functional Component</h3>
//             <div> {title} </div>
//             <div> {content} </div>
//         </>
//     );
// }

// 방법 3
// function FunProps(props) {
//     const {title, content} = props;

//     return (
//         <>
//             <h3>Use Functional Component</h3>
//             <div> {title} </div>
//             <div> {content} </div>
//         </>
//     );
// }

// 방법 4 protype 이용해서 어떤 props가 넘어올지 명시
// 유연한 js 특징으로 안해 예상치 못한 요류 발생 예방
import PropTypes from "prop-types";

function FunProps({title, content, number}) {
    return (
        <>
            <h3>Use Functional Component</h3>
            <div> 제목: {title} </div>
            <div> 내용: {content} </div>
            <div> 숫자: {number} </div>
        </>
    );
}

// 다른 타입을 입력했을 때
FunProps.propTypes = {
    title: PropTypes.string,
    // 필수값 설정, 값을 안 넘겨오면 오류 발생
    content: PropTypes.string.isRequired,
    number: PropTypes.number
}

// 값이 안 넘어올 때
FunProps.defaultProps = {
    title: "Title"
}

export default FunProps;