
import Header from "./components/Header-1/page";
import HeroSec1 from "./components/Hero-Sec-01/page";
import Footer1 from "./Footer-1/page";
import HeroSec2 from "./Hero-Sec-02/page";
import HeroSec3 from "./components/Hero-Sec-03/page";
import HeroSec from "./components/Hero-Sec-04/page";
import MainLastHeroSec from "./components/Main-Last-Hero-Sec/page";
import MainFooter from "./components/Main-Footer/page";


export default function Home() {
  return (
   <div>
    <Header/>
    <HeroSec1/>
    <Footer1/>
    <HeroSec2/>
    <HeroSec3/>
    <HeroSec/>
    <MainLastHeroSec/>
    <MainFooter/>

   </div>
  );
}
