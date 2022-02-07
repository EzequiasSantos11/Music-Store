import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useState} from "react";
import Styles from './styles.module.scss';

export function Header({blackHeader}){
  const [navOpen, setNavOpen] = useState(false);
  return(
    <header className={`${blackHeader ? `${Styles.containerBlack}` : `${Styles.container}` }`}>
      <div className={Styles.left}>
        <button className={Styles.arrowLeft}>
          <ArrowBackIosIcon />
        </button>
        <button className={Styles.arrowRight}>
          <ArrowBackIosIcon />
        </button>
      </div>
        <button>Ativar</button>
      <div className={Styles.right}>
        <div className={Styles.user} onClick={()=> setNavOpen(!navOpen)}>
          <img src="https://github.com/ezequiassantos11.png" alt="" />
          <h1>Nome de usuario</h1>
          <ArrowDropDownIcon/>
        </div>
        <nav className={`${navOpen ? `${Styles.navOpen}` : `${Styles.navClose}`}`}>
          <ul>
            <li>Conta</li>
            <li>Perfil</li>
            <li>Premium</li>
            <li>Baixar</li>
            <li>Sair</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}