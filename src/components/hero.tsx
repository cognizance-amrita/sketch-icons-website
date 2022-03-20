import { Container, Heading, HStack, Button, Link } from "@chakra-ui/react";

export const Hero = () => {
    const style = {
        textDecoration : "none"
    }
  return (
    <Container maxW="container.xl" centerContent mt="10">
      <Heading fontFamily="system-ui" size="xl">
      Open source icons that are simply stunning
      </Heading>
      <HStack mt="6">
          <Link style={style} href="/usage" >
        <Button size="lg" variant="solid" border="1px" borderColor="gray.200">Get Started</Button>
        </Link>
        <Link style={style} isExternal href="https://www.npmjs.com/package/sketch-icons">
        <Button size="lg" variant="solid" colorScheme="linkedin" >Npm Package</Button>
        </Link>
      </HStack>
    </Container>
  );
};
