import css from "./AppName.module.css"; //here we can give any name css style or anithing else
function AppName() {
  return <h1 className={css["todo-heading"]}>TODO App</h1>;
}

export default AppName;
