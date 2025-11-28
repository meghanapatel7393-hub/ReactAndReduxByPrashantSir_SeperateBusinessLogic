function Hello(){


  let myName='Bhavesh'
  let number=123;
  let fullName =()=>{
    return 'Bhavesh Shekhda'
  }

  return (
    <h3>Hello, {myName} { fullName()}{number}</h3>
  );
}
export default Hello;