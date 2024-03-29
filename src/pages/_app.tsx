import { useEffect, useState } from 'react';
import '../styles/globals.scss'
import Aside from './components/Aside'
import Footer from './components/Footer'
import Header from './components/Header'

function MyApp({ Component, pageProps }) {
  const [backHeader, setBlackHeader] = useState(false);
  const [openMenu, setOpenMenu] = useState(true);
  useEffect(()=>{
    const scrollListener = ()=>{
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }
    window.addEventListener("scroll", scrollListener);
    return ()=>{
      window.removeEventListener("scroll", scrollListener);
    }
  },[])
  return(
    <>
      <Aside openMenu={openMenu}/>
      <Header openMenu={openMenu} openMenuFunction={()=>setOpenMenu(!openMenu)} blackHeader={backHeader}/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
