import { useEffect, useRef, useState } from "react";

const useDynamicText = (strArray, intervalTime = 200, pauseTime = 1000) => {
  const [dynamicText, setDynamicText] = useState("");
  const currentStringCounterRef = useRef(0);
  const pauseRef = useRef(false);
  const setTimeoutRef = useRef();
  const isIncrementRef = useRef(true);
  const indexRef = useRef(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (pauseRef.current === true && setTimeoutRef.current === undefined) {
        setTimeoutRef.current = setTimeout(() => {
          setTimeoutRef.current = undefined;
          pauseRef.current = false;
        }, pauseTime);
      } else if (pauseRef.current === false) {
        isIncrementRef.current ? indexRef.current++ : indexRef.current--;
      }
      setDynamicText(
        strArray[currentStringCounterRef.current].substring(0, indexRef.current)
      );
    }, intervalTime);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [strArray, intervalTime, pauseTime]);
  useEffect(() => {
    if (
      (indexRef.current >= strArray[currentStringCounterRef.current].length ||
        indexRef.current <= 0) &&
      intervalRef.current !== undefined
    ) {
      if (indexRef.current <= 0) {
        currentStringCounterRef.current =
          (currentStringCounterRef.current + 1) % strArray.length;
      } else if (
        indexRef.current >= strArray[currentStringCounterRef.current].length
      ) {
        pauseRef.current = true;
      }
      isIncrementRef.current = !isIncrementRef.current;
    }
  });

  return dynamicText;
};

export default useDynamicText;
