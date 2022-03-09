import { useRef } from "react";
import useIntersection from "./useIntersection";

export default function DivRef({ children }) {
  const options = { threshold: [1], rootMargin: "50px" };
  const ref = useRef();
  const inViewport = useIntersection(ref, options);

  if (inViewport) {
    console.log("in viewport:", ref.current);
  }

  return (
    <div className="target-container" ref={ref}>
      {children}
    </div>
  );
}
