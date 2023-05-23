import {useState} from "react";

function useNewCode() {
    const [active, setActive] = useState(false);

    function toggleActive(){
        setActive(prev => !prev)
        return;
    }

    return {active, toggleActive}
}

export default useNewCode;