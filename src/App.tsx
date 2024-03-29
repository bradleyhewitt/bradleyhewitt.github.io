import './App.sass'
import About from "./about/About.tsx";
import Resume from "./resume/Resume.tsx";
import { useRef } from "react";
import Projects from "./projects/Projects.tsx";
import Education from "./education/Education.tsx";
import {MdOutlineArrowDropUp} from "react-icons/md";

function App() {
  const about = useRef<null | HTMLDivElement>(null);
  const projects = useRef<null | HTMLDivElement>(null);
  const education = useRef<null | HTMLDivElement>(null);
  const resume = useRef<null | HTMLDivElement>(null);
  return (
    <div className={"main"} >
      <div className={"toolbar"}>
        <MdOutlineArrowDropUp size={30} className={"toolbar-item"} onClick={() => {
          about?.current?.scrollIntoView({
            behavior: "smooth"
          });
        }}/>
        <p className={"toolbar-item"} onClick={() => {
            projects?.current?.scrollIntoView({
              behavior: "smooth"
            });
          }
        }>PROJECTS</p>
        <p className={"toolbar-item"} onClick={() => {
          education?.current?.scrollIntoView({
            behavior: "smooth"
          });
        }
        }>EDUCATION</p>
        <p className={"toolbar-item"} onClick={() => {
            resume?.current?.scrollIntoView({
              behavior: "smooth"
            });
          }
        }>RÉSUMÉ</p>
      </div>
      <div className={"content"}>
        <div className={"spacer"} ref={about} />
        <About />
        <div className={"break"} />
        <div className={"spacer"} ref={projects} />
        <Projects />
        <div className={"break"} />
        <div className={"spacer"} ref={education} />
        <Education />
        <div className={"break"} />
        <div className={"spacer"} ref={resume} />
        <Resume />
      </div>
    </div>
  )
}

export default App
