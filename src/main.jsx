import { createRoot } from 'react-dom/client';
import App from './App';

// function getResult(me, other){
//   if(me === other){
//     return '무승부'
//   }
//   if(
//     (me === 'scissor' && other === 'paper') ||
//     (me === 'paper' && other == 'rock') ||
//     (me === 'rock' && other === 'scissor')
//   ){
//     return '승리';
//   }
//   return '패배';
// }



// const me = 'rock';
// const other = 'scissor';

createRoot(document.getElementById('root')).render(<App />)
