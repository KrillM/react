import styled from "styled-components"
// css의 네이밍 중복을 방지한다.
const Sero = styled.div`
    display: flex;
    @media screen and (max-width: 768px){
        display: block;
    }
`;

const Box1 = styled.div`
    width: 100px;
    height: 200px;
    background-color: ${(props) => props.color || 'black'};

    &:hover {
        
    }
`;

export default function StyledComponent() {
    return(
        <>
            <Sero>
            <Box1 color="blue" />
                <Box1 color="white"/>
                <Box1 color="red"/>
                <Box1 />
                <Box1 color="yellow"/>
                <Box1 color="red"/>
                <Box1 color="green" />
                <Box1 color="white"/>
                <Box1 color="red"/>
            </Sero>     
        </>
    )
}