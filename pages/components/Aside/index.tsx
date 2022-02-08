import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddBoxIcon from '@mui/icons-material/AddBox';
import RecommendIcon from '@mui/icons-material/Recommend';
import DownloadingIcon from '@mui/icons-material/Downloading';
import Styles from "./styles.module.scss";


export default function Aside(){
  return(
    <aside className={Styles.container}>
      <div className={Styles.logo}>
        <MusicNoteIcon className={Styles.logosvg}/>
        <h2>Music Store</h2>
      </div>
      <nav>
        <ul className={Styles.ulPrimary}>
          <li> <HomeIcon  className={Styles.iconSvg}/> Inicio</li>
          <li> <SearchIcon className={Styles.iconSvg}/> Buscar</li>
          <li> <LibraryBooksIcon className={Styles.iconSvg}/> Sua Biblioteca</li>
        </ul>
        <ul className={Styles.ulSecondary}>
          <li> <AddBoxIcon className={Styles.iconSvg}/> Criar Playlist</li>
          <li> <RecommendIcon className={Styles.iconSvg}/> Musicas Curtidas</li>
        </ul>
      </nav>
      <span className={Styles.separator}></span>
      <a> <DownloadingIcon className={Styles.iconSvg}/> Instalar aplicativo</a>
    </aside>
  )
}