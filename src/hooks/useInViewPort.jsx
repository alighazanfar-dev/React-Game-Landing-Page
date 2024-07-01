import { useEffect, useRef } from "react";

const useInViewPort = (
  onEnter = () => {},
  onLeave = () => {},
  options = { threshold: 0.6 }
) => {
  const elementRef = useRef(null);
  const prevY = useRef(0);
  const prevRatio = useRef(0);

  useEffect(() => {
    const currentElement = elementRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentY = entry.boundingClientRect.top;
          const direction = currentY < prevY.current ? "bottom" : "top";

          if (
            entry.isIntersecting &&
            entry.intersectionRatio > prevRatio.current
          ) {
            onEnter(direction);
          } else if (
            !entry.isIntersecting &&
            entry.intersectionRatio < prevRatio.current
          ) {
            onLeave(direction);
          }

          prevY.current = currentY;
          prevRatio.current = entry.intersectionRatio;
        });
      },
      {
        threshold: options.threshold,
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [onEnter, onLeave, options.threshold]);

  return elementRef;
};

export default useInViewPort;
