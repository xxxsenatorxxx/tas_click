import { useState, useRef } from "react";

const waveTumbling = {
  filter: [
    "drop-shadow(0px 0px 0px black)",
    "drop-shadow(0px 0px 20px black)",
    "drop-shadow(0px 0px 0px black)",
  ],
  scale: [1, 1.2, 1],
};

function useCountController() {
  const [count, setCount] = useState<number>(0);
  const elementRef = useRef<HTMLDivElement>(null);

  const recitation = count ? count : "شروع";
  const degRotation = typeof recitation === "string" ? 0 : recitation * 10;

  const handleIncrease = () => {
    setCount((count) => ++count);

    elementRef.current?.animate(waveTumbling, {
      duration: 1000,
      direction: "alternate",
    });
  };

  return {
    handleIncrease,
    recitation,
    elementRef,
    degRotation,
  };
}

export default useCountController;
