import { useEffect } from "react";

const useClickOutSide = (ref) => {
  useEffect(() => {
    function handleClickOutSide(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        console.log("you clicked out side of me !");
      }
    }
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [ref]);
};

export default useClickOutSide;
