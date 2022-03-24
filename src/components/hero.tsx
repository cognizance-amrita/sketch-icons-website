import { Container, useMediaQuery ,Heading, HStack, Button, Link } from "@chakra-ui/react";
import { NpmColor , AtomColor} from "sketch-icons";
export const Hero = () => {
    const style = {
        textDecoration : "none"
    }
    const [isMobile] = useMediaQuery("(max-width: 425px)") 

  return (
    <Container maxW="container.xl" centerContent mt={isMobile ? "1" : "10"}>
      <Heading fontFamily="system-ui" size={isMobile ? "lg" : "xl"}>
      500+ Open source icons that are simply stunning
      </Heading>
      <HStack mt="6">
          <Link style={style} href="/usage" >
        <Button size={isMobile ? "md" : "lg"} variant="solid" border="1px" borderColor="gray.200">Get Started</Button>
        </Link>
        <Link style={style} isExternal href="https://www.npmjs.com/package/sketch-icons">
        <Button size={isMobile ? "md" : "lg"} variant="solid" colorScheme="linkedin" >Npm Package</Button>
        </Link>
       
      </HStack>
    </Container>
  );
};
