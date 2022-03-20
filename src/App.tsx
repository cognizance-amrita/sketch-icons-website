import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import URLPaths from "./components/routes";
import { Nav } from "./components/nav";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/footer";

export const App = () => (
  <Router>
    <ChakraProvider theme={theme}>
      <Box fontSize="xl">
        <Nav />
        <URLPaths />
      </Box>
      <br />
      <Footer />
    </ChakraProvider>
  </Router>
);
