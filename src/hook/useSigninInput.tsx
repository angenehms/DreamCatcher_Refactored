import { useState } from "react";

export function useSigninInput():[string, (e:React.ChangeEvent<HTMLInputElement>) =>void] {
  const [inputValue, setInputValue] = useState("");

  const changeValueFunction = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return [inputValue, changeValueFunction];
}
