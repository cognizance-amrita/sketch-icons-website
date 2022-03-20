import React , { useEffect, useState} from 'react'
import {
  Box,
  Center,
  Container,
  VStack,
  Wrap,
  Text,
  WrapItem,
  ChakraProvider,
  useToast, 
} from "@chakra-ui/react";
import { Task, CameraReelFill } from "sketch-icons";
import { extendTheme, withDefaultProps } from '@chakra-ui/react'

import * as Icons from 'sketch-icons';
 
const IconGrid = () => {

    const [key, setKey] = useState([])
    const [value, setValue] = useState([])

    useEffect(() => {
        console.log('IconGrid');
        for (const [key, value] of Object.entries(Icons)) {
            console.log(key, value);
            // setKey(key);
            setValue(value);
        }
    }, []);

        const toast = useToast();

       
    const iconStyle = {
        fontFamily : "system-ui",
        color : 'gray.100',  
    }

    const onClick = () =>{
        console.log(Icons);
        console.log(typeof(Icons));

        // const keys = Object.keys(Icons); 
        // console.log(keys);
        // const values = Object.values(Icons); 
        // console.log(values);
        // const entries = Object.entries(Icons);
        // console.log(entries);
       
        // const item = Object.entries(Icons);
        // console.log(item.keys); 
        // console.log(item.values); 
        console.log('clicked');
        toast({
              title: 'Copied.',
              description: "Task icon was copied",
              status: 'success',
              duration: 3000,
              isClosable: true,
            })
    } 

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


    return (
        <Container  maxW="container.xl" mt="10">
          <Wrap style={iconStyle} >
               {Object.entries(Icons).map((item) => (
                     <WrapItem>
                     <Box onClick={onClick}  as='button' shadow="base" w="170px" h="120px" p="5" borderRadius={4}>
                       <VStack spacing={5}> 
                            <Icons.Activity />
                         <Text fontSize="md">{item[0]}</Text>
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
}


export default IconGrid;