import {Flex, Heading} from "@radix-ui/themes";

export default function Resume() {
  return (
    <Flex direction={"column"} gap={"2"}>
      <Heading size={"8"} className={"subheader"}>
        RÉSUMÉ
      </Heading>
      <object
        data={"https://drive.google.com/viewerng/viewer?embedded=true&url=https://raw.githubusercontent.com/bradleyhewitt/bradleyhewitt.github.io/master/src/assets/resume.pdf"}
        type="application/pdf"
        className={"pdf"}
      />
    </Flex>
  );
}
