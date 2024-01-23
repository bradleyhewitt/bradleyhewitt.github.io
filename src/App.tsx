import './App.css'
import {Flex, Theme, Text, Heading} from "@radix-ui/themes";
import { purpleDark } from '@radix-ui/colors';
import Window from "./Window.tsx";
import Resume from "./Resume.tsx";
import { useRef } from "react";
import Projects from "./Projects.tsx";

function App() {
  const about = useRef<null | HTMLDivElement>(null);
  const projects = useRef<null | HTMLDivElement>(null);
  const resume = useRef<null | HTMLDivElement>(null);
  return (
    <Theme
      appearance="inherit"
      accentColor={"plum"}
      color={purpleDark.purple8}
      panelBackground="solid"
      scaling="100%"
      radius="full"
      className={"main"}
    >
      <Flex className={"toolbar"} direction={"row"} gap={"5"} align={"center"} justify={"center"}>
        <Text className={"toolbar-item"} onClick={() => {
            about?.current?.scrollIntoView({
              behavior: "smooth"
            });
          }
        }>ABOUT</Text>
        <Text className={"toolbar-item"} onClick={() => {
            projects?.current?.scrollIntoView({
              behavior: "smooth"
            });
          }
        }>PROJECTS</Text>
        <Text className={"toolbar-item"} onClick={() => {
            resume?.current?.scrollIntoView({
              behavior: "smooth"
            });
          }
        }>RESUME</Text>
      </Flex>
      <Flex className={"content"} direction={"column"} gap={"4"} align={"center"} justify={"start"}>
        <div className={"spacer"} ref={about} />
        <Heading size={"9"} className={"header"}>
          BRADLEY HEWITT
        </Heading>
        <Window />
        <div className={"spacer"} ref={projects} />
        <Projects ref={projects}/>
        <div className={"spacer"} ref={resume} />
        <Resume />
      </Flex>
    </Theme>
  )
}

export default App
