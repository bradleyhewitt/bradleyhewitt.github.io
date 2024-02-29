import './App.sass'
import About from "./about/About.tsx";
import Resume from "./resume/Resume.tsx";
import { useRef } from "react";
import Projects from "./projects/Projects.tsx";

function App() {
  const about = useRef<null | HTMLDivElement>(null);
  const projects = useRef<null | HTMLDivElement>(null);
  const resume = useRef<null | HTMLDivElement>(null);
  return (
    <div className={"main"} >
      <div className={"toolbar"}>
        <p className={"toolbar-item"} onClick={() => {
            about?.current?.scrollIntoView({
              behavior: "smooth"
            });
          }
        }>ABOUT</p>
        <p className={"toolbar-item"} onClick={() => {
            projects?.current?.scrollIntoView({
              behavior: "smooth"
            });
          }
        }>PROJECTS</p>
        <p className={"toolbar-item"} onClick={() => {
            resume?.current?.scrollIntoView({
              behavior: "smooth"
            });
          }
        }>RESUME</p>
      </div>
      <div className={"content"}>
        <div className={"spacer"} ref={about} />
        <About />
        <div className={"break"} />
        <div className={"spacer"} ref={projects} />
        <Projects />
        <div className={"break"} />
        <div className={"spacer"} ref={resume} />
        <Resume />
      </div>
    </div>
  )
}

export default App
