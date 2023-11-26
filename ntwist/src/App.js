import { Box, Flex } from "@chakra-ui/react";
import "./App.css";
import Footer from "./Components/Footer";
import Middle from "./Components/Middle";
import Navbar from "./Components/Navbar";
import Top from "./Components/Top";

function App() {
  return (
    <Flex flexDirection={"column"}>
      <Box
        bg={`url('https://ntwist.com/wp-content/uploads/2022/03/2021-02-oil-and-gas-digital-hero-e1648984580884.png')`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        w="100%"
        h="100vh">
        <Navbar />
        <Top />
      </Box>

      <Middle />
      <Footer />
    </Flex>
  );
}

export default App;
