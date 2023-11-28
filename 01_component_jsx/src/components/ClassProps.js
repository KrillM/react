import { Component } from 'react';
import PropTypes from 'prop-types';

class ClassProps extends Component {
    render(){
        return (
            <>
            <h3>클래스형 컴포넌트 이용 (Props)</h3>
            <div>
                제목 {this.props.title}, 내용 {this.props.content}, 숫자 {this.props.number}
            </div>
            </>
        );
    }

    static defaultProps = {
        title: '코딩온',
    };

    static propTypes = {
        title: PropTypes.string,
        content: PropTypes.string,
        number: PropTypes.number,
    };
}

// ClassProps.propTypes = {
//     title: PropTypes.string,
//     content: PropTypes.string,
//     number: PropTypes.number,
// }

export default ClassProps;