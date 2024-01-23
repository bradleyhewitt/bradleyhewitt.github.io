import {Flex, Heading} from "@radix-ui/themes";
import Project from "./Project.tsx";
import {Ref} from "react";

export default function Projects(props: { ref: Ref<HTMLHeadingElement> | undefined}) {
  return (
    <Flex direction={"column"} gap={"2"} ref={props.ref}>
      <Heading size={"8"} className={"subheader"} ref={props.ref}>
        PROJECTS
      </Heading>
      <Flex className={"projects"} direction={"row"} wrap={"wrap"} justify={"center"} align={"center"} gap={"4"}>
        <Project
          title={"This Page"}
          desc={"Portfolio page written in React.js and Radix UI."}
          url={"https://github.com/bradleyhewitt/bradleyhewitt.github.io"}
        />
        <Project
          title={"Delightful"}
          desc={"Minecraft Java modification focused on extending the ecosystem with a more cohesive meal selection. It has amassed over eight million downloads and continues to grow."}
          url={"https://github.com/brnbrd/Delightful"}
        />
      </Flex>
    </Flex>
  );
}