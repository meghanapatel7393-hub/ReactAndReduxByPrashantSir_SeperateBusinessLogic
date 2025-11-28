let CurrentTime = () => {
  let time = new Date();
  return (
    <h1 className="lead">
      This is the current time: {time.toLocaleDateString()} {" - "}
      {time.toLocaleTimeString()}
    </h1>
  );
};

export default CurrentTime;
