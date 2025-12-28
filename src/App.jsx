import HandIcon from "./HandIcon";
import Button from "./Button";

function App(){

  const handleClearClick = ()=> alert('다시 시작!');

  
  
  return(
    <div>
      <h1>가위 바위 보</h1>
      <div>
        <h2>패를 골라주세요</h2>
        <HandIcon value='rock'/>
        <HandIcon value='paper'/>
        <HandIcon value='scissor'/>
      </div>

      <div>
        <Button onClick={handleClearClick} >처음부터</Button>
      </div>
    </div>
  )
}

export default App;