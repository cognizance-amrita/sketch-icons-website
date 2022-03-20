import { Container, Input, InputGroup, InputLeftElement, InputRightElement, Kbd } from "@chakra-ui/react";
import { MaginifyingGlass2 } from "sketch-icons" 
import React, {useEffect, useRef } from "react";

export const SearchBar = () => { 
  const searchInput = useRef<HTMLInputElement>(null);

  function handleFocus(){
    searchInput.current && searchInput.current.focus();
  }

  document.addEventListener("keydown" , e=> {
    if (e.key.toLowerCase() === "b" && e.ctrlKey) {
      handleFocus();
    }
    }
    )

    return (  
    <Container maxW="container.xl" centerContent mt="10">
        <InputGroup size="lg"  
        >
    <InputLeftElement
      
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
      children = "$"
      
    //   children={<MaginifyingGlass2 />}
    />
    <Input 
        onFocus={handleFocus} 
        ref={searchInput} 
        placeholder='Search' />
    <InputRightElement  width='10.5rem'  >
    <span>
        <Kbd>ctrl</Kbd> + <Kbd>b</Kbd>
      </span>
    </InputRightElement>
  </InputGroup>
    </Container>
      );
}