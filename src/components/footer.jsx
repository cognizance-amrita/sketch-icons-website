import {Text , Box  ,Code , Stack , Image , Heading , Spacer , Button , Flex, Container} from "@chakra-ui/react";
import Logo from "../assets/images/sketch-icons.svg";
const Footer = () => {

    const style = {
        fontFamily: "system-ui",
    }

    return (
        <Box style={style} bg="gray.100" px="10" py="5">
            <Container maxW='container.xl'>
            <Flex alignItems="center" >
           <Stack direction="row" isInline>
          <Image
            boxSize="35px"
            objectFit="contain"
            src={Logo}
            alt="React-icons"
          />
          <Text size="lg"  >Sketch icons &nbsp;
          <Spacer />
          <span>
            <Code>v1.1.0</Code>
          </span> 
          </Text>
          
        </Stack> 
        <Spacer />
        <Text fontSize='sm' >
       Proudly made with ❤️ in India 
        </Text>
        <Spacer />
        <Text fontSize='sm' >
       Open Source | Released under MIT License | Copyright @ 2022
        </Text>
        </Flex>
        </Container>
        </Box>
    );
}
export default Footer;