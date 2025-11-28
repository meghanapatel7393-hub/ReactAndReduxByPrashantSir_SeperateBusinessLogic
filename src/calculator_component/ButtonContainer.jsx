import style from "./ButtonContainer.module.css";
function ButtonContainer(props) {
  const buttonname = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div id="button-container" className={style["button-container"]}>
      {buttonname.map((button) => {
        return (
          <button
            className={style["button"]}
            key={button}
            // onClick={props.onButtonClicked} here we get data using event.target.innerText OR we can pass from here
            onClick={() => props.onButtonClicked(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
  // return <button onClick={props.onClick}>{props.value}</button>;
}

export default ButtonContainer;
