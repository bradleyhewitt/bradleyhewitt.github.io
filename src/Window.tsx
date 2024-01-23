import {Flex, Heading} from "@radix-ui/themes";

export default function Window() {
  return (
    <Flex direction={"column"} gap={"2"} align={"center"} justify={"start"}>
      <Flex className={"window"} direction={"column"} gap={"0"} align={"center"}>
        <Flex className={"bar"} direction={"row"} align={"center"} justify={"start"}>
          <img src={"https://raw.githubusercontent.com/bradleyhewitt/bradleyhewitt.github.io/master/src/assets/buttons.png"}  alt={"Buttons"} height={"10px"} width={"auto"}/>
        </Flex>
        <Flex direction={"row"} wrap={"wrap"} gap={"4"} className={"window-content"} align={"center"} justify={"center"}>
          <Flex direction={"column"} gap={"4"} align={"center"} justify={"start"}>
            <Heading size={"6"} className={"subheader"}>
              FULL-STACK
            </Heading>
            <Heading size={"6"} className={"subheader"}>
              SOFTWARE ENGINEER
            </Heading>
            <Heading size={"6"} className={"subheader"}>
              & WEB DEVELOPER
            </Heading>
          </Flex>
          <img src={"src/assets/profile.png"} alt={"Bradley Hewitt"} className={"profile"} />
        </Flex>
      </Flex>
    </Flex>
  );
}
