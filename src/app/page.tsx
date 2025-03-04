// const Home =() =>{
//   return (
//   <>
//   </>
//   );
// };
// export default Home

import AboutMe from "./Component/About";
import ContactForm from "./Component/Contact";
import EducationFlipBox from "./Component/Education";
import PortfolioHeader from "./Component/Header";
import ProfileSection from "./Component/Home";
import { Projects } from "./Component/Project";
import Skills from "./Component/Skills";



export default function Home() {
  return <>
    <PortfolioHeader/>
    <ProfileSection/>
    <AboutMe/>
    <Skills/>
    <EducationFlipBox/>
    <Projects/>
    <ContactForm/>
  </>
}
