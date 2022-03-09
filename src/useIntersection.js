import { useState, useEffect } from "react";

const useIntersection = (element, options) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries.length > 0) {
        for (let i = 0; i < entries.length; i++) {
          setState(entries[i]["isIntersecting"]);
        }
      }
    }, options);

    element.current && observer.observe(element.current);

    return () => observer.unobserve(element.current);
  }, []);

  return isVisible;
};

export default useIntersection;
