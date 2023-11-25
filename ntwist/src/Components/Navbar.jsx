import React from "react";
import Top from "./Top";
import {
  Box,
  Flex,
  Image,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Home", "Industries", "AI Software", "Blog", "Contact Us"];

const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}>
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        // className={style.back}
        bg={`url('https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png')`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        w="100%"
        h="100vh">
        <Box px={14}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Flex alignItems={"center"}>
              <Image
                w={{ base: "40%", sm: "50%", md: "35%", xl: "20%" }}
                src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
                alt=""
              />
            </Flex>
            <HStack alignItems={"center"} spacing={6} width={"50%"}>
              <HStack
                spacing={6}
                color={"white"}
                as={"nav"}
                fontSize={{ base: "14px", sm: "14px", md: "12px", xl: "17px" }}
                fontWeight={"600"}
                display={{ base: "none", md: "flex" }}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>
            <IconButton
              size={"md"}
              background={"transparent"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>

          {isOpen ? (
            <Box pb={6} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4} color={"white"}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
        <Top />
      </Box>
    </>
  );
}
