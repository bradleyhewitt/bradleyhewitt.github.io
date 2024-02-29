import "./About.sass"

export default function About() {
  return (
    <div className={"about"}>
      <h1 className={"header"} >
        BRADLEY HEWITT
      </h1>
      <div className={"window"}>
        <div className={"window-bar"}>
          <img
            src={"https://raw.githubusercontent.com/bradleyhewitt/bradleyhewitt.github.io/master/src/assets/buttons.png"}
            alt={"Buttons"}
            style={{height: "10px", width: "auto", padding: "10px"}}
          />
        </div>
        <div className={"window-content"}>
          <div style={{display: "flex", flexFlow: "column", justifyContent: "center", alignContent: "center", gap: "20px"}}>
            <h1 className={"window-text"}>
              FULL-STACK
            </h1 >
            <h1 className={"window-text"}>
              SOFTWARE ENGINEER
            </h1>
            <h1 className={"window-text"}>
              & WEB DEVELOPER
            </h1>
          </div>
          <img
            src={"https://raw.githubusercontent.com/bradleyhewitt/bradleyhewitt.github.io/master/src/assets/profile.png"}
            alt={"Bradley Hewitt"}
            className={"profile"}
          />
        </div>
      </div>
    </div>
  );
}
