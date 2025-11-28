import { useState } from "react";
import "./AppCalculator.css";
import style from "./AppCalculator.module.css";
import ButtonContainer from "./calculator_component/ButtonContainer";
import Display from "./calculator_component/Display";
function AppCalculator() {
  const [calVal, setCalVal] = useState("");
  // const onButtonClick = (event) => {
  //   console.log(event.target.innerText);
  // };
  //OR
  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText === "=") {
      setCalVal(eval(calVal));
    } else if (buttonText === "C") {
      setCalVal("");
    } else {
      setCalVal(calVal + buttonText);
    }
  };
  return (
    <div id="calculator" className={style["calculator"]}>
      <Display displayValue={calVal} />
      <ButtonContainer onButtonClicked={onButtonClick} />
    </div>
  );
}

export default AppCalculator;
