/**
 * import hooks
 */
import React, { useRef, useEffect, useState } from "react";
/**
 * retrive the current version from package.json
 */
import packageJson from "sketch-icons/package.json";
/**
 * import components
 */
import {
  Box,
  Container,
  VStack,
  Wrap,
  Text,
  Image,
  MenuItem,
  MenuList,
  MenuButton,
  Menu,
  Flex,
  WrapItem,
  useToast,
  useColorModeValue,
  useMediaQuery,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Kbd,
  Modal,
  ModalBody,
  Button,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  useDisclosure,
  ModalCloseButton,
  Code,
  Heading,
  Spacer,
  Divider,
} from "@chakra-ui/react";
/**
 * import sketch icon
 */
import { Search } from "sketch-icons";
/**
 * import sketch-icons.css
 */
import "sketch-icons/dist/cdn/sketch-icons.css";
/**
 * import copy to clipboard
 */
import copy from "clipboard-copy";
/**
 * import camelcase
 */
import camelcase from "camelcase";

/**
 * import logos for dropdown
 */
import SimpleLogo from "../assets/images/simple.png";
import ColorLogo from "../assets/images/color.png";

/**
 * import jsondata of simple icons
 */
import simpleJson from "sketch-icons/dist/simple/index.json";
/**
 * import jsondata of color icons
 */
import colorJson from "sketch-icons/dist/color/index.json";
// const simpleJson : { [key: string]: any } = require('sketch-icons/dist/simple/index.json');

const IconGrid = () => {
  /**
   * color mode of icon color
   */
  const iconColor = useColorModeValue("#2A2238", "white");
  /**
   * shadow color of box
   */
  const shadow = useColorModeValue("base", "");
  /**
   *  mobile view
   */
  const [isMobile] = useMediaQuery("(max-width: 425px)");
  /**
   *  disclosure for modal
   */
  const { isOpen, onOpen, onClose } = useDisclosure();
  /**
   *  search input
   */
  const searchInput = useRef<HTMLInputElement>(null);
  /**
   *  state for color value
   */
  const [isColor, setisColor] = useState<boolean>(false);

  /**
   *  state for simple and color icons
   */
  const [webicons, setWebIcons] = useState("");
  const [Icons, setIcons] = useState(simpleJson);
  /**
   * state for search filteration
   */
  const [searchJson, setSearchJson] = useState(simpleJson);
  /**
   *  state for webcomponent icon
   */
  const [webcomponent, setWebComponent] = useState(" ");
  /**
   *  toast message for copy
   */
  const toast = useToast();
  /**
   *  wrap style css
   */
  const wrapStyle = {
    fontFamily: "system-ui",
    color: iconColor,
  };

  /**
   *  icon style css
   */
  const iconDim = {
    width: "28px",
    height: "28px",
    color: iconColor,
  };

  /**
   *  function to focus search input using keyboard shortcut
   */
  function handleFocus() {
    searchInput.current && searchInput.current.focus();
  }

  /**
   *  specifying keyboard shortcut for search input focus
   */
  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "b" && e.ctrlKey) {
      handleFocus();
    }
  });
  /**
   *  use effect
   */
  useEffect(() => {}, []);

  /**
   *  search icon function
   */
  const search = (val: string) => {
    setIcons(isColor ? colorJson : simpleJson);
    const searchValue = val.toLowerCase();
    const searchResults = Object.values(searchJson).filter((key) => {
      return key.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setIcons(searchResults);
  };

  const onMenuClick = (iscolor: boolean) => {
    setisColor(iscolor);
    setIcons(iscolor ? colorJson : simpleJson);
    setSearchJson(iscolor ? colorJson : simpleJson);
  };

  /**
   *  function to open modal and pass value to modal body
   */
  const onClick = (item: string) => {
    onOpen();
    setWebIcons(`<i class="sk sk-${item}"></i>`);
    const camelcaseName = camelcase(item, {
      pascalCase: true,
    });
    setWebComponent(`<${camelcaseName} />`);
  };

  /**
   *  function to copy value to clipboard
   */
  const copyIcon = (item: string) => {
    copy(`${item}`);
    toast({
      title: "Copied.",
      description: `${item} icon was copied`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" mt="10">
      <Flex>
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
        <Spacer />
        <Menu>
          <MenuButton
            as={Button}
            size={isMobile ? "md" : "lg"}
            mx="5"
            my="10"
            leftIcon={
              <Image
                boxSize="1.3rem"
                borderRadius="full"
                src={isColor ? ColorLogo : SimpleLogo}
                alt="Color icons"
              />
            }
          >
            {isColor ? "Color Icons" : "Simple Icons"}
          </MenuButton>
          <MenuList>
            <MenuItem minH="48px" onClick={() => onMenuClick(true)}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                src={ColorLogo}
                alt="Color icons"
                mr="6px"
              />
              <span>Color Icons</span>
            </MenuItem>
            <MenuItem minH="40px" onClick={() => onMenuClick(false)}>
              <Image
                boxSize="2rem"
                borderRadius="full"
                src={SimpleLogo}
                alt="Simple icons"
                mr="6px"
              />
              <span>Simple Icons</span>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
      <Wrap style={wrapStyle}>
        {Object.values(Icons).map((icon, index) => (
          <WrapItem key={index}>
            <Box
            overflow='hidden'
              onClick={() => onClick(icon.name)}
              as="button"
              shadow={shadow}
              w={isMobile ? "130px" : "170px"}
              h={isMobile ? "110px" : "120px"}
              p="5"
              borderRadius={4}
            >
              <VStack spacing={5}>
                <Image
                  style={iconDim}
                  src={
                    isColor
                      ? `https://unpkg.com/sketch-icons@${packageJson.version}/main/color/${icon.name}.svg`
                      : `https://unpkg.com/sketch-icons@${packageJson.version}/main/simple/${icon.name}.svg`
                  }
                  alt={`${icon.name}`}
                /> 
                <Text fontSize="sm" isTruncated>
                  {icon.name}
                </Text> 
              </VStack>
            </Box>
          </WrapItem>
        ))}
      </Wrap>

      {/* Modal  */}

      <Modal size="lg" isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading size="md" mb={4}>
              Webcomponent
            </Heading>
            <Text size="md">Using as web component? Copy, paste, and go.</Text>
            <br />
            <Flex mb={4}>
              <Code
                flex="3"
                p={2}
                bg="blue.50"
                borderRadius={6}
                display="block"
                whiteSpace="pre"
                children={<Text color="blue.700">{webcomponent}</Text>}
              />

              <Button
                autoFocus
                size="md"
                onClick={() => copyIcon(webcomponent)}
                ml={2}
              >
                Copy
              </Button>
            </Flex>
            {isColor ? null : (
              <>
                <Heading size="md" mb={4}>
                  Icon Font
                </Heading>
                <Text size="md">Using the web font? Copy, paste, and go.</Text>
                <br />
                <Flex>
                  <Code
                    flex="3"
                    p={2}
                    bg="blue.50"
                    borderRadius={6}
                    display="block"
                    whiteSpace="pre"
                    children={<Text color="blue.700">{webicons}</Text>}
                  />

                  <Button size="md" onClick={() => copyIcon(webicons)} ml={2}>
                    Copy
                  </Button>
                </Flex>
              </>
            )}
            <br />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default IconGrid;
