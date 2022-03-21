import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Container,
  VStack,
  Wrap,
  Text,
  WrapItem,
  useToast,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { Task, CameraReelFill } from "sketch-icons";
import * as Icons from "sketch-icons";
import copy from "clipboard-copy";


const IconGrid = () => {
  const iconColor = useColorModeValue("#2A2238", "white");
  const [isMobile] = useMediaQuery("(max-width: 425px)");

  const [key, setKey] = useState([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    // console.log("IconGrid");
    // for (const [key] of Object.entries(Icons)) {
    //   console.log(key);
    //   // setKey(key);
    //   setValue(value);
    // }
  }, []);

  const toast = useToast();

  const iconStyle = {
    fontFamily: "system-ui",
    color: "gray.100",
  };

  const onClick = (item : object) => {
    // console.log(Icons);
    console.log(item); 
    // console.log(typeof Icons);

    // Object.entries(Icons).map((s) => {
    //   console.log(s[1]);
    // });

    const keys = Object.keys(Icons);
    console.log(keys);
    const values = Object.values(Icons);
    console.log(values);
    const entries = Object.entries(Icons);
    console.log(entries);

    const test = Object.entries(Icons);
    console.log(test[0][0]); 
    console.log(test[0][1]); 
    console.log("clicked");
    copy(`<${item} />`);
    toast({
      title: "Copied.",
      description: `${item} icon was copied`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  //     const Icons = () => {
  //         for (const [key, value] of Object.entries(Icons)) {
  //         return (
  //             <WrapItem>
  //               <Box onClick={onClick} as='button' shadow="base" w="180px" h="120px" p="5" borderRadius={4}>
  //                 <VStack spacing={5}>
  //                   <CameraReelFill />
  //                   <Text fontSize="md">{key}</Text>
  //                 </VStack>
  //               </Box>
  //             </WrapItem>
  //         )
  //     }
  // }

  const ROW_HEIGHT = 180;
  const MAX_COLUMN_WIDTH = 160;

  return (
    <Container maxW="container.xl" mt="10">
      <Wrap style={iconStyle}>
        {Object.entries(Icons).map((item) => (
          <WrapItem>
            <Box
              onClick={() => onClick(item)}
              as="button"
              shadow="base"
              w={isMobile ? "130px" : "170px"}
              h={isMobile ? "110px" : "120px"}
              p="5"
              borderRadius={4}
            >
              <VStack spacing={5}>
                {/* <item[1] />  */}
                
                <Icons.Activity color={iconColor} />
                <Text fontSize="md" isTruncated>
                  {item[0]}
                </Text>
              </VStack>
            </Box>
          </WrapItem>
        ))}

        {/* <WrapItem>
              <Box onClick={onClick} as='button' shadow="base" w="180px" h="120px" p="5" borderRadius={4}>
                <VStack spacing={5}>
                  <CameraReelFill />
                  <Text fontSize="md">Task</Text>
                </VStack>
              </Box>
            </WrapItem> */}
      </Wrap>
    </Container>
  );
};

export default IconGrid;
