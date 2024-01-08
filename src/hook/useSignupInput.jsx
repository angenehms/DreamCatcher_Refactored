import { useState } from "react";

export function useSignupInput() {
  const [inputValue, setInputValue] = useState("");
  const [validity, setValidity] = useState(false);

  const validityCheckFunction = (e) => {
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
