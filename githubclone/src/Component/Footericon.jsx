import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  return (
    <Box bg="rgb(22,27,34)" color="rgb(149,157,165)">
      <Container
        as={Stack}
        maxW={"9xl"}
        p={8}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}>
        <Stack
          direction={"row"}
          spacing={{ base: "2", sm: "2", md: "4", xl: "6" }}
          fontSize={{ base: "8px", sm: "10px", md: "10px", xl: "14px" }}>
          <Text>© 2022 Github,Inc.</Text>
          <Text>Terms</Text>
          <Text>Privacy(Updated 08/2022)</Text>
          <Text>Sitemap</Text>
          <Text>What is Git?</Text>
        </Stack>
        <Stack direction={"row"} spacing={2} fontSize="20px">
          <SocialButton href={"#"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton href={"#"}>
            <FaYoutube />
          </SocialButton>
          <SocialButton href={"#"}>
            <FaInstagram />
          </SocialButton>
          <SocialButton href={"#"}>
            <FaGithub />
          </SocialButton>
          <SocialButton href={"#"}>
            <IoLogoFacebook />
          </SocialButton>
          <SocialButton href={"#"}>
            <FaLinkedinIn />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
