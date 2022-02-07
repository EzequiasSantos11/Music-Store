import { SEO } from './components/SEO';
import styles from "../styles/Home.module.css";
import { ListMusic } from './components/ListMusic';

export default function Home() {

 
  return (
    <div className={styles.container}>
      <SEO title={"Home"}/>
      <ListMusic/>
      <ListMusic/>
      <ListMusic/>
    </div>
  )
}
