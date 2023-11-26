import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

export default function LargeWithLogoLeft() {
  return (
    <Box bg={"rgb(13,17,23)"}>
      <Container as={Stack} maxW={"8xl"} py={10}>
        <SimpleGrid
          textAlign={"left"}
          templateColumns={{
            sm: "2fr 2fr",
            md: "2fr 1fr 1fr 1fr 1fr",
          }}
          spacing={4}>
          <Stack spacing={6}>
            <Box fontSize={"30px"} color="white">
              Github
            </Box>
            <Box>
              <Text color="whitesmoke">
                Subscribe to our developer newsletter
              </Text>
              <Text fontSize={"sm"} color={"rgb(149,157,165)"}>
                Get tips, technical guides, and best practices. Once a month.
                Right in your inbox.
              </Text>
            </Box>
            <Button
              width="38%"
              fontSize={{ base: "10px", sm: "14px", md: "14px", xl: "18px" }}
              color="white"
              border="1px solid white"
              padding="10px"
              bg="transparent">
              Subscribe
            </Button>
          </Stack>
          <Stack align={"flex-start"} color={"rgb(149,157,165)"}>
            <Box as="a" href={"#"}>
              Product
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Features
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Enterprise
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Copilot
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Security
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Pricing
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Team
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Resources
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Roadmap
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Compare GitHub
            </Box>
          </Stack>
          <Stack color={"rgb(149,157,165)"} align={"flex-start"}>
            <Box as="a" href={"#"}>
              Platform
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Developer API
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Partners
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Electron
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              GitHub Desktop
            </Box>
          </Stack>
          <Stack color={"rgb(149,157,165)"} align={"flex-start"}>
            <Box as="a" href={"#"}>
              Support
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Docs
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Community Forum
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Professional Services
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Premium Support
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Skills
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Status
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Contact GitHub
            </Box>
          </Stack>
          <Stack color={"rgb(149,157,165)"} align={"flex-start"}>
            <Box as="a" href={"#"}>
              Company
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              About
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Customer stories
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Blog
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              The ReadME Project
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Careers
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Press
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Inclusion
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Social Impact
            </Box>
            <Box
              as="a"
              href={"#"}
              _hover={{ color: "blue", borderBottom: "1px solid blue" }}>
              Shop
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
