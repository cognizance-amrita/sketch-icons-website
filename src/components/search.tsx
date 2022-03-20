import { Container, Input, InputGroup, InputLeftElement, InputRightElement, Kbd } from "@chakra-ui/react";
import { MaginifyingGlass2 } from "sketch-icons"
export const SearchBar = () => {
    return (  
    <Container maxW="container.xl" centerContent mt="10">
        <InputGroup size="lg">
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
      children = "$"
    //   children={<MaginifyingGlass2 />}
    />
    <Input placeholder='Search' />
    <InputRightElement  width='10.5rem'  >
    <span>
        <Kbd>shift</Kbd> + <Kbd>H</Kbd>
      </span>
    </InputRightElement>
  </InputGroup>
    </Container>
      );
}