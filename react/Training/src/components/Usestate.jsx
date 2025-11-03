function Usestate(){

  function change(){
    console.log("Button Clicked");
    document.write("Hello Sameer");
  }

  return (
    <div>
      <button onClick={change}>Click</button>
    </div>
  )
}
export default Usestate;