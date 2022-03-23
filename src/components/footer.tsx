import {Text , Box  ,Code , Stack , Image ,   useColorModeValue  , Spacer , Button , Flex, Container} from "@chakra-ui/react";
import packageJson from "sketch-icons/package.json"; 
import Logo from "../assets/images/sketch-icons.svg";
const Footer = () => {

    const style = {
        fontFamily: "system-ui",
    }

  const textColor = useColorModeValue('gray.600' , 'gray.600')

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
          <Text size="lg" color={textColor} >Sketch icons &nbsp;
          <Spacer />
          <span>
            <Code colorScheme={textColor} >v{packageJson.version}</Code>
          </span> 
          </Text>
          
        </Stack> 
        <Spacer />
        <Text fontSize='sm' color={textColor} >
       Proudly built with ❤️ in India 
        </Text>
        <Spacer />
        <Text fontSize='sm' color={textColor}>
       Open Source | Released under MIT License | Copyright @ 2022
        </Text>
        </Flex>
        </Container>
        </Box>
    );
}
export default Footer;