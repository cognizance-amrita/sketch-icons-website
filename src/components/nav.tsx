import packageJson from "sketch-icons/package.json"; 
// import { Github,Git, Plus, SettingsFill } from "sketch-icons";
import { Github,  Git , Category } from "sketch-icons";
import {
  Flex,
  Heading,
  Box,
  Spacer,
  Button,
  Image,
  Code,
  Stack,
  LinkOverlay,
  Link,
  Menu ,
  IconButton,
  MenuList,
  MenuItem,
  MenuButton,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "../assets/images/sketch-icons.svg";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { useMediaQuery } from "@chakra-ui/react";
export const Nav = () => {

  const iconColor = useColorModeValue('#2A2238', 'white')
 
  const [isTablet] = useMediaQuery("(max-width: 768px)")  

  const menuStyle = {
    fontFamily : "system-ui", 
    color : 'gray.100',
    fontSize : '16px',
  }

  return (
    <Flex as="header" p="5">
      <Box p={2} ml={isTablet ? "2" : "5"}>
        <Stack direction="row" isInline>
          <Image
            boxSize={{base : "30px", md:"40px"}}
            objectFit="contain"
            src={Logo}
            alt="React-icons"
          /> 
          <Link href="/" style={{ textDecoration: "none" }}>
            <Heading
            fontSize={{ base: '20px', md: '25px', lg: '30px' }} 
            fontFamily="system-ui">
              Sketch icons &nbsp;
              <span>
                <Code>v{packageJson.version}</Code>
              </span>
            </Heading>
          </Link>
        </Stack>
      </Box>
      <Spacer />
      {isTablet ? (
     <Menu   
     >
     <MenuButton mr="3"
       as={IconButton}
       bg ="gray.100"
      
       aria-label='Options'
       icon={<Category width={20} height={20} />}
       variant='outline'
     />
     <MenuList>
       <MenuItem  
       style={menuStyle} 
        as={Link} 
        href="/"   
       >
        Home
       </MenuItem>
       <MenuItem  
       style={menuStyle}
       as={Link} 
        href="/usage"  
       >
        Usage
       </MenuItem>
       <MenuItem  
       as={Link} 
       isExternal 
       href="https://github.com/garudatechnologydevelopers/Sketch-icons"
       style={menuStyle}
       icon={<Github color={iconColor} height="12" width="12" />}  
       >
        Github
       </MenuItem>
       <MenuItem  
       as={Link}  
       isExternal 
       href="https://github.com/garudatechnologydevelopers/Sketch-icons/blob/main/CONTRIBUTING.md"
       style={menuStyle}
       icon={<Git color={iconColor} height="12" width="12" />}  
       >
        Contribute
       </MenuItem>
     </MenuList>
   </Menu> 
      ) 
       : 
      <Box>
      <Button color="current" mr="5"              
      >
        <LinkOverlay href="/">Home</LinkOverlay>
      </Button>
      <Button color="current" mr="5">
        <LinkOverlay href="/usage">Usage</LinkOverlay>
      </Button>
      <Button
      
        color="current"
        leftIcon={<Github color={iconColor} height="14" width="14" />}
        mr="5"
      >
        <LinkOverlay isExternal href="https://github.com/garudatechnologydevelopers/Sketch-icons">Github</LinkOverlay>
      </Button>
      <Button
      
        color="current"
        leftIcon={<Git color={iconColor} height="14" width="14" />}
        mr="5"
      >
        <LinkOverlay isExternal href="https://github.com/garudatechnologydevelopers/Sketch-icons/blob/main/CONTRIBUTING.md">Contribute</LinkOverlay>
      </Button>
    </Box>

      }
      <ColorModeSwitcher mr="5" justifySelf="flex-end" />

    </Flex>


  );
};
