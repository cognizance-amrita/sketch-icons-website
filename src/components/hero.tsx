import * as React from "react";
import { Container, Heading, HStack, Button, Stack, Link } from "@chakra-ui/react";

export const Hero = () => {
    const style = {
        textDecoration : "none"
    }
  return (
    <Container maxW="container.xl" centerContent mt="10">
      <Heading fontFamily="system-ui" size="xl">
        Simply beautiful open source icons
      </Heading>
      <HStack mt="6">
          <Link style={style}  isExternal href="https://www.npmjs.com/package/sketch-icons">
        <Button size="lg" variant="solid" border="1px" borderColor="gray.200">Get Started</Button>
        </Link>
        <Link style={style}>
        <Button size="lg" variant="solid" colorScheme="linkedin">Download all</Button>
        </Link>
      </HStack>
    </Container>
  );
};
