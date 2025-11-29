import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("clear interval");
    };
  }, []);
  return (
    <h1 className="lead">
      This is the current time: {time.toLocaleDateString()} {" - "}
      {time.toLocaleTimeString()}
    </h1>
  );
};

export default CurrentTime;
