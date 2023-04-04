import { useState } from 'react'

export function useSigninInput () {

    const [inputValue, setInputValue] = useState("");

    const changeValueFunction = (e) => {

        setInputValue(e.target.value);
     
    }

    return [inputValue, changeValueFunction]
}