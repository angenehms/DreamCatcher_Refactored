import { useState } from "react";

export function useSignupInput():[string, (e: React.ChangeEvent<HTMLInputElement>) => void, boolean] {
  const [inputValue, setInputValue] = useState("");
  const [validity, setValidity] = useState(false);

  const validityCheckFunction = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    if (e.target.id === "Identification" && e.target.value.includes("@")) {
      setValidity(true);
    } else if (e.target.id === "Password" && e.target.value.length >= 8) {
      setValidity(true);
    } else {
      setValidity(false);
    }
  };

  return [inputValue, validityCheckFunction, validity];
}
