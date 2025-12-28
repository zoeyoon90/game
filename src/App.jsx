import HandIcon from "./HandIcon";


function App(){
  return(
    <div>
      <h1>가위 바위 보</h1>
      <div>
        <h2>패를 골라주세요</h2>
        <HandIcon value='rock'/>
        <HandIcon value='paper'/>
        <HandIcon value='scissor'/>
      </div>
    </div>
  )
}

export default App;