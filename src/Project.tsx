import {Flex} from "@radix-ui/themes";

export default function Project(props: { title: string, desc: string, url: string }) {
  return (
      <Flex direction={"column"} align={"center"} justify={"center"} gap={"0"} className={"project"} onClick={() => {
        window.open(props.url, "_blank", "noreferrer")
      }}>
        <h1 className={"project-title"}>{props.title}</h1>
        <p className={"project-description"}>{props.desc}</p>
      </Flex>
    );
}