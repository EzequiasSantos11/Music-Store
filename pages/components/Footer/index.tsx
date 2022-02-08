import {useState} from "react";
import Styles from "./styles.module.scss";
import Replay5Icon from '@mui/icons-material/Replay5';
import Forward5Icon from '@mui/icons-material/Forward5';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

export function Footer(){
  const [onPlay, setOnPlay] = useState(false);
  return(
    <footer className={Styles.container}>
     <div className={Styles.wrapper}>
       <div className={Styles.preview}>
        <img src="assets/music.webp" alt="" />
        <div className={Styles.text}>
          <h3>nome da música</h3>
          <p>Studio produsiu</p>
        </div>
        <a>+</a>
       </div>
       <div className={Styles.navigation}>
          <div className={Styles.iconsPlayer}>
            <Replay5Icon className={Styles.iconPlay}/>

            <SkipPreviousIcon className={Styles.iconPlay}/>

            <PlayCircleOutlineIcon 
              onClick={()=>setOnPlay(true)}  
              className={Styles.iconPlay}
              style={{display: onPlay ? "none" : "flex"}}
            />

            <PauseCircleOutlineIcon onClick={()=>setOnPlay(false)} style={{display: onPlay ? "flex" : "none"}} className={Styles.iconPlay}/>

            <SkipNextIcon className={Styles.iconPlay}/>

            <Forward5Icon className={Styles.iconPlay}/>
          </div> 
          <div className={Styles.progress}>
            <span>2:00</span>
            <span className={Styles.line}></span>
            <span>3:00</span>
          </div>
       </div>
       <div className={Styles.controllers}>
          <VolumeUpIcon/>
          <span></span>
       </div>
     </div>
    </footer>
  )
}