import packageJson from "sketch-icons/package.json"; 
import { Plus, SettingsFill } from "sketch-icons";
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
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "../assets/images/sketch-icons.svg";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { useEffect } from "react";
export const Nav = () => {

  const iconColor = useColorModeValue('#2A2238', 'white')
  return (
    <Flex as="header" p="5">
      <Box p={2} ml="5">
        <Stack direction="row" isInline>
          <Image
            boxSize="40px"
            objectFit="contain"
            src={Logo}
            alt="React-icons"
          /> 
          <Link href="/" style={{ textDecoration: "none" }}>
            <Heading size="lg" fontFamily="system-ui">
              Sketch icons &nbsp;
              <span>
                <Code>v{packageJson.version}</Code>
              </span>
            </Heading>
          </Link>
        </Stack>
      </Box>
      <Spacer />
      <Box>
        <Button color="current" mr="5">
          <LinkOverlay href="/">Home</LinkOverlay>
        </Button>
        <Button color="current" mr="5">
          <LinkOverlay href="/usage">Usage</LinkOverlay>
        </Button>
        <Button
          color="current"
          leftIcon={<SettingsFill color={iconColor} height="12" width="12" />}
          mr="5"
        >
          <LinkOverlay isExternal href="https://github.com/garudatechnologydevelopers/Sketch-icons">Github</LinkOverlay>
        </Button>
        <Button
          color="current"
          leftIcon={<Plus color={iconColor} height="12" width="12" />}
          mr="5"
        >
          <LinkOverlay isExternal href="https://github.com/garudatechnologydevelopers/Sketch-icons/blob/main/CONTRIBUTING.md">Contribute</LinkOverlay>
        </Button>
      </Box>
      <ColorModeSwitcher mr="5" justifySelf="flex-end" />
    </Flex>
    // <Flex as="header" position="fixed" w="100%">
    // <Heading as="h4" size="md">Sketch-icons</Heading>
    // </Flex>
  );
};
