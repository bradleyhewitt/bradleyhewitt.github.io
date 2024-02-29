import {ReactNode} from "react";

export default function Project(props: { icon: ReactNode, title: string, desc: string, url: string }) {
  return (
      <div className={"project"} onClick={() => {
        window.open(props.url, "_blank", "noreferrer")
      }}>
        <div className={"project-title"}>
          <div className={"project-icon"}>
            {props.icon}
          </div>
          <h1>{props.title}</h1>
        </div>
        <p className={"project-description"}>{props.desc}</p>
      </div>
    );
}