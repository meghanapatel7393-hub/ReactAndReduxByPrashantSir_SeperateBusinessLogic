import style from "./Container.module.css";
//this is example of passing children
function Container(props) {
  return <div className={style["container"]}>{props.children}</div>;
}

export default Container;
