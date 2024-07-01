import { useEffect } from "react";
import "../assets/cursor.css";

const useCustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("blob");
    document.body.appendChild(cursor);

    const handleMouseMove = (e) => {
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(cursor);
    };
  }, []);
};

export default useCustomCursor;
