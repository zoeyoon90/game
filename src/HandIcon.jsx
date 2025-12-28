import rockImg from './assets/rock.svg'
import scissorImg from './assets/scissor.svg'
import paperImg from './assets/paper.svg'

  const IMGES={
    scissor: scissorImg,
    rock: rockImg,
    paper: paperImg,
  }

function HandIcon ({value}){
  const src = IMGES[value];
  return(
    <img src ={src} alt={value} />
  )
}

export default HandIcon;