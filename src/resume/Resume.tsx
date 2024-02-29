import "./Resume.sass"
import {MdOutlineOpenInNew} from "react-icons/md";

export default function Resume() {
  return (
    <div className={"section resume-container"}>
      <div style={{display: "flex", flexFlow: "row nowrap", justifyContent: "center", alignItems: "center", gap: "10px"}}>
        <h1 className={"subheader"}>
          RÉSUMÉ
        </h1>
        <a href={"https://raw.githubusercontent.com/bradleyhewitt/bradleyhewitt.github.io/master/src/assets/resume.pdf"} className={"svglink"} target={"_blank"} rel={"noopener noreferrer"}>
          <MdOutlineOpenInNew size={24} />
        </a>
      </div>
      <img className={"pdf"} src={"https://raw.githubusercontent.com/bradleyhewitt/bradleyhewitt.github.io/master/src/assets/resume.svg"} alt={"RÉSUMÉ"}/>
    </div>
  );
}
