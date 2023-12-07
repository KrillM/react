import { useState } from "react";

// toggle 기능이 자주 사용되는데, boolean 앞에 ! 넣는 기능을 사용
export default function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue);
    const toggle = () => {
        setValue(!value);
    }

    return [value, toggle];
}