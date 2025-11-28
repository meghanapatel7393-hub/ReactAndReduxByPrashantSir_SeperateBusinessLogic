function Random(){
  let number =Math.floor(Math.random() * 10); // Math.random() * 10;
 
  return(
    <h1 style={{color:'white', backgroundColor:'black'}}>Random Number is {number} <br></br>with define style</h1>
  );
}
export default Random;