import "./Resume.sass"

export default function Resume() {
  return (
    <div className={"section resume-container"}>
      <div style={{display: "flex", flexFlow: "row nowrap", justifyContent: "center", alignItems: "center", gap: "10px"}}>
        <h1 className={"subheader"}>
          RÉSUMÉ
        </h1>
        <a href={"https://raw.githubusercontent.com/bradleyhewitt/bradleyhewitt.github.io/master/src/assets/resume.pdf"} className={"svglink"} target={"_blank"} rel={"noopener noreferrer"}>
          <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" fill="none">
            <path d="M21 3L15 3M21 3L12 12M21 3V9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11" stroke="currentColor" strokeLinecap="round"/>
          </svg>
        </a>
      </div>
      <img className={"pdf"} src={"https://raw.githubusercontent.com/bradleyhewitt/bradleyhewitt.github.io/master/src/assets/resume.svg"} alt={"RÉSUMÉ"}/>
    </div>
  );
}
