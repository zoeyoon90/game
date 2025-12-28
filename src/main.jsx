import { createRoot } from 'react-dom/client'

function getResult(me, other){
  if(me === other){
    return '무승부'
  }
  if(
    (me === 'scissor' && other === 'paper') ||
    (me === 'paper' && other == 'rock') ||
    (me === 'rock' && other === 'scissor')
  ){
    return '승리';
  }
  return '패배';
}

function handleClick(){
  alert('가위바위보!');
}

const me = 'rock';
const other = 'scissor';

createRoot(document.getElementById('root')).render(
  <div>
    <h1 id="title">가위바위보 게임</h1>
    <h2>패를 골라주세요</h2>
    <button onClick={handleClick}>가위</button>
    <button onClick={handleClick}>바위</button>
    <button onClick={handleClick}>보</button>
    <p>{getResult(me,other)}</p>
  </div>,
)
