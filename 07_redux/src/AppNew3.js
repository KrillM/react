import "./App.css";
import { Box1Container } from "./containers/BoxdulContainers";

// containers 폴더
// redux store에 직접적으로 접근하는 컴포넌트를 모아두기 위해서.

// components 폴더
// 보통 presentational 컴포넌트만 저장.
// redux store에 직접적으로 접근하지 않는 컴포넌트만를 모아둠.

function AppNew3() {
    return (
        <div>
            <Box1Container />
        </div>
    );
}

export default AppNew3;