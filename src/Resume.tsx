import {Flex, Heading} from "@radix-ui/themes";
import {Ref} from "react";

export default function Resume(props: { ref: Ref<HTMLHeadingElement> | undefined}) {
  return (
    <Flex direction={"column"} gap={"2"} ref={props.ref}>
      <Heading size={"8"} className={"subheader"}>
        RÉSUMÉ
      </Heading>
      <iframe src={"src/assets/resume.pdf"} className={"pdf"}/>
    </Flex>
  );
}