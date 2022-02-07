import Styles from "./styles.module.scss";
import {useState} from "react";

export function ListMusic(){
  const [lisMusic, setListMusic] = useState([
    {id: 1, name: "rebelde", studio: "sony", capa: "assets/music.webp"},
    {id: 2, name: "rebelde", studio: "sony", capa: "assets/music.webp"},
    {id: 3, name: "rebelde", studio: "sony", capa: "assets/music.webp"},
    {id: 4, name: "rebelde", studio: "sony", capa: "assets/music.webp"}
  ])
  return(
    <section className={Styles.container}>
      <div className={Styles.title}>
        <h1>Podcasts originais</h1>
        <a>ver tudo</a>
      </div>
      <div className={Styles.list}>
        {lisMusic.map((item, key)=>(
          <div key={key} className={Styles.card}>
            <img src={item.capa} alt="music-image" />
            <div className={Styles.text}>
              <h2>{item.name}</h2>
              <p>{item.studio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}