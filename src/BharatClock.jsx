import "./BharatApp.css"; //this is used for Bharat Clock
import ClockHeading from "./bharatcomponent/ClockHeading";
import ClockSlogan from "./bharatcomponent/ClockSlogan";
import CurrentTime from "./bharatcomponent/CurrentTime";

function BharatClock() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan />
      <CurrentTime />
    </center>
  );
}

export default BharatClock;
