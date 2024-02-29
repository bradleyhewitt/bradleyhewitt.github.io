import Project from "./Project.tsx";
import "./Projects.sass"
import {
  MdOutlineHome,
  MdOutlineLocalPizza,
  MdOutlineSportsBasketball
} from "react-icons/md";

export default function Projects() {
  return (
    <div className={"section"}>
      <h1 className={"subheader"}>
        PROJECTS
      </h1>
      <div className={"projects"}>
        <Project
          icon={<MdOutlineSportsBasketball size={18} />}
          title={"Shport"}
          desc={"Web application for following sports teams or leagues — providing schedules, news, standings, and real-time scores."}
          url={"https://github.com/bradleyhewitt/Shport"}
        />
        <Project
          icon={<MdOutlineLocalPizza size={18} />}
          title={"Delightful"}
          desc={"Minecraft Java modification focused on extending the ecosystem with a more cohesive meal selection. It has amassed over eight million downloads and continues to grow."}
          url={"https://github.com/brnbrd/Delightful"}
        />
        <Project
          icon={<MdOutlineHome size={18} />}
          title={"This Page"}
          desc={"Portfolio page written in React.js."}
          url={"https://github.com/bradleyhewitt/bradleyhewitt.github.io"}
        />
      </div>
    </div>
  );
}