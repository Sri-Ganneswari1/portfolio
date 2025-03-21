

import AboutMe from "./components/About";
import ContactForm from "./components/Contact";
import EducationFlipBox from "./components/Education";
import PortfolioHeader from "./components/Header";
import ProfileSection from "./components/Home";
import { Projects } from "./components/Project";
import Skills from "./components/Skills";



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
