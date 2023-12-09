import { Component } from 'react';
import PropTypes from 'prop-types';

class ClassProps extends Component {
    
    render(){
        return (
            <>
            <div>텍스트 {this.props.text}</div>
            <button type='button' onClick={() => alert(this.props.valid)}>
                유효성
            </button>
            </>
        );
    }

    static defaultProps = {
        text: '이건 기본 text props입니다.',
    };

    static propTypes = {
        text: PropTypes.string.isRequired,
    };
}

export default ClassProps;