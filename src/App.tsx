import './App.sass'
import About from "./about/About.tsx";
import Resume from "./resume/Resume.tsx";
import { useRef } from "react";
import Projects from "./projects/Projects.tsx";
import Education from "./education/Education.tsx";

function App() {
  const projects = useRef<null | HTMLDivElement>(null);
  const education = useRef<null | HTMLDivElement>(null);
  const resume = useRef<null | HTMLDivElement>(null);
  return (
    <div className={"main"} >
      <div className={"toolbar"}>
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
        }>RESUME</p>
      </div>
      <div className={"content"}>
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
