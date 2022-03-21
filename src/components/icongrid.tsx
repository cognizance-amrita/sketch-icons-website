import { useRef, useEffect, useState } from "react";
import {
  Box,
  Container,
  VStack,
  Wrap,
  Text,
  WrapItem,
  useToast,
  useColorModeValue,
  useMediaQuery,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Kbd,
} from "@chakra-ui/react";
import { Search } from "sketch-icons";
import * as Icons from "sketch-icons";
import copy from "clipboard-copy";  

const IconGrid = () => {
  const iconColor = useColorModeValue("#2A2238", "white");
  const shadow  = useColorModeValue("base", "")
  const [isMobile] = useMediaQuery("(max-width: 425px)");

  const searchInput = useRef<HTMLInputElement>(null);

  function handleFocus() {
    searchInput.current && searchInput.current.focus();
  }

  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "b" && e.ctrlKey) {
      handleFocus();
    }
  });

  const [key, setKey] = useState<Object>([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    setKey(Object.entries(Icons));
    // console.log("IconGrid");
    // for (const [key] of Object.entries(Icons)) {
    //   // setKey(key);
    //   setValue(value);
    // }
  }, []);

  const toast = useToast();

  const iconStyle = {
    fontFamily: "system-ui",
    color: "gray.100",
  };

  const search = (val: string) => {
    const searchValue = val.toLowerCase();
    const searchResults = Object.entries(Icons).filter(([icon]) => {
      console.log("icon", icon);
      return icon.toLowerCase().includes(searchValue.toLowerCase());
    });
    console.log(searchValue);
    console.log(searchResults);
    setKey(searchResults);
    // setValue(searchResults);
  };

  const onClick = (item: String) => {
    console.log(key);
    // console.log(Icons);
    console.log(item);
    // console.log(item[1]);
    // console.log(typeof Icons);

    // Object.entries(Icons).map((s) => {
    //   console.log(s[1]);
    // });

    // const keys = Object.keys(Icons);
    // console.log(keys);
    // const values = Object.values(Icons);
    // console.log(values);
    // const entries = Object.entries(Icons);
    // console.log(entries);

    // const test = Object.entries(Icons);
    // console.log(test[0][0]);
    // console.log(test[0][1]);
    // console.log("clicked");
    copy(`<${item} />`);
    toast({
      title: "Copied.",
      description: `${item} icon was copied`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  //     const Iconsss = () => {
  //         for (const [key, value] of Object.entries(Icons)) {
  //         return (
  //             <WrapItem>
  //               <Box  as='button' shadow="base" w="180px" h="120px" p="5" borderRadius={4}>
  //                 <VStack spacing={5}>
  //                   {value}
  //                   <Text fontSize="md">{key}</Text>
  //                 </VStack>
  //               </Box>
  //             </WrapItem>
  //         )
  //     }
  // }

  return (
    <Container maxW="container.xl" mt="10">
      <InputGroup size="lg" my="10">
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          children={<Search width={15} height={15} color="#718096" />}
        />
        <Input
          onChange={(e) => search(e.target.value)}
          onFocus={handleFocus}
          ref={searchInput}
          placeholder="Search"
        />
        <InputRightElement width="10.5rem">
          <span>
            <Kbd>ctrl</Kbd> + <Kbd>b</Kbd>
          </span>
        </InputRightElement>
      </InputGroup>
      <Wrap style={iconStyle}> 
        {Object.entries(key).map((item) => (
          <WrapItem>
            <Box
              onClick={() => onClick(item[1][0])}
              as="button" 
              shadow={shadow}
              w={isMobile ? "130px" : "170px"}
              h={isMobile ? "110px" : "120px"}
              p="5"
              borderRadius={4}
            >
              <VStack spacing={5}>
                <Icons.Activity color={iconColor} />
                <Text fontSize="md" isTruncated>
                  {item[1][0]}
                </Text>
              </VStack>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Container>
  );
};

export default IconGrid;
