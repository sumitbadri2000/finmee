import {
  Box,
  Image,
  Text,
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import earth from "../earth.png";

export default function ImageText() {
  return (
    <Box bg="rgb(13,17,23)" paddingBottom="50px">
      <Box
        width={"90%"}
        margin="auto"
        padding={"10px"}
        marginBottom={{ base: "15px", md: "28px", xl: "40px" }}>
        <Image
          src="https://github.githubassets.com/assets/issues-plan-2-46d1ce1d4519.png?width=1249&format=webpll"
          alt=""
        />
      </Box>
      <Flex
        flexDirection={"column"}
        marginBottom={"40px"}
        width={{ base: "100%", md: "70%" }}
        marginLeft={{ base: "0px", md: "10%" }}
        textAlign={"left"}
        padding={"40px"}
        gap={{ base: "30px", md: "35px", xl: "40px" }}>
        <Heading
          fontSize={{ base: "22px", md: "30px", xl: "70px" }}
          color={"white"}>
          Over 100 million developers call GitHub home
        </Heading>
        <Text
          color={"rgb(94,101,110)"}
          fontSize={{ base: "18px", md: "22px", xl: "28px" }}>
          Whether you’re scaling your startup or just learning how to code,
          GitHub is your home. Join the world’s largest developer platform to
          build the innovations that empower humanity. Let’s build from here.
        </Text>
        <Flex gap={"50px"} flexDirection={{ base: "column", md: "row" }}>
          <InputGroup
            width={{ base: "100%", sm: "100%", md: "60%", xl: "50%" }}
            border={"none"}>
            <Input
              type="text"
              placeholder="Email Address"
              fontSize={{ base: "10px", md: "12px", xl: "20px" }}
              padding={"18px"}
              bg={"white"}
            />
            <InputRightAddon
              children="Sign Up for github"
              cursor={"pointer"}
              color={"white"}
              bg="rgb(116,65,200)"
              border={"none"}
              fontSize={{ base: "10px", md: "12px", xl: "20px" }}
              padding={"18px"}
              fontWeight={"600"}
            />
          </InputGroup>
          <Button
            bg="transparent"
            fontSize={{ base: "16px", md: "14px", xl: "20px" }}
            padding={"18px"}
            border={"1px solid rgb(94,101,110)"}
            _hover={{ bg: "transparent", border: "1px solid white" }}
            fontWeight={"600"}
            color={"white"}>
            Start a free Enterprise trial{" "}
          </Button>
        </Flex>
      </Flex>

      <Box width="70%" margin="auto">
        <Image src={earth} alt="" />
      </Box>
      <Flex
        marginBottom={"40px"}
        flexDirection={"column"}
        textAlign={"left"}
        margin={"auto"}
        width={{ base: "80%", sm: "80%", md: "80%", xl: "65%" }}
        gap="20px"
        marginLeft="6%"
        fontSize={{ base: "12px", sm: "14px", md: "16px", xl: "18px" }}
        color="rgb(149,157,165)">
        <Text>
          1. This 7X times factor is based on data from the industry’s longest
          running analysis of fix rates Veracode State of Software Security
          2023, which cites the average time to fix 50% of flaws as 198 days vs.
          GitHub’s fix rates of 72% of flaws with in 28 days which is at a
          minimum of 7X faster when compared.
        </Text>
        <Text>
          2. The Total Economic Impact™ Of GitHub Enterprise Cloud and Advanced
          Security, a commissioned study conducted by Forrester Consulting,
          2022. Results are for a composite organization based on interviewed
          customers.
        </Text>
        <Text>
          3. There are now 100 million developers around the world using GitHub.
          Read the blog post.
        </Text>
      </Flex>
    </Box>
  );
}
