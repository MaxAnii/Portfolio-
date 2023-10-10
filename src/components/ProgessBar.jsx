import { React, useState, useEffect } from "react";
import { Progress } from "@nextui-org/react";
const ProgessBar = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Progress
        isStriped
        aria-label="Loading..."
        color="success"
        value={value}
        className="max-w-md"
        size="lg"
      />
    </>
  );
};
export default ProgessBar;
