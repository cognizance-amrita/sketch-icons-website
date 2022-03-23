/**
 * import hooks
 */
import React, { useRef, useEffect, useState } from 'react';
/**
 * retrive the current version from package.json
 */
import packageJson from 'sketch-icons/package.json';
/**
 * import components
 */
import {
    Box,
    Container,
    VStack,
    Wrap,
    Text,
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
} from '@chakra-ui/react';
/**
 * import sketch icon
 */
import { Search } from 'sketch-icons';
/**
 * import sketch-icons.json file as webJson
 */
import webJson from 'sketch-icons/dist/cdn/sketch-icons.json';
/**
 * import sketch-icons.css
 */
import 'sketch-icons/dist/cdn/sketch-icons.css';
/**
 * import copy to clipboard
 */
import copy from 'clipboard-copy';
/**
 * import camelcase
 */
import camelcase from 'camelcase';

const IconGrid = () => {
    /**
     * color mode of icon color
     */
    const iconColor = useColorModeValue('#2A2238', 'white');
    /**
     * shadow color of box
     */
    const shadow = useColorModeValue('base', '');
    /**
     *  mobile view
     */
    const [isMobile] = useMediaQuery('(max-width: 425px)');
    /**
     *  disclosure for modal
     */
    const { isOpen, onOpen, onClose } = useDisclosure();
    /**
     *  search input
     */
    const searchInput = useRef<HTMLInputElement>(null);
    /**
     *  state for font icons
     */
    const [webicons, setWebIcons] = useState(' ');
    /**
     *  state for webcomponent icon
     */
    const [webcomponent, setWebComponent] = useState(' ');
    /**
     *  state for unicode value
     */
    const [unicode, setUnicode] = useState<string>('');

    /**
     *  state for icons to display
     */
    // eslint-disable-next-line @typescript-eslint/ban-types
    const [icons, setIcons] = useState<Object>(' ');

    /**
     *  toast message for copy
     */
    const toast = useToast();

    /**
     *  wrap style css
     */
    const wrapStyle = {
        fontFamily: 'system-ui',
        color: iconColor,
    };

    /**
     *  icon style css
     */
    const iconDim = {
        width: '28px',
        height: '28px',
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
    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'b' && e.ctrlKey) {
            handleFocus();
        }
    });

    /**
     *  use effect to get icons
     */
    useEffect(() => {
        setIcons(Object.entries(webJson));
    }, []);

    /**
     *  search icon function
     */
    const search = (val: string) => {
        const searchValue = val.toLowerCase();
        const searchResults = Object.entries(webJson).filter(([key, value]) => {
            return key.toLowerCase().includes(searchValue.toLowerCase());
        });
        setIcons(searchResults);
    };

    /**
     *  function to open modal and pass value to modal body
     */
    const onClick = (item: [string, string]) => {
        onOpen();
        setUnicode(item[1]);
        setWebIcons(`<i class="sk sk-${item[0]}"></i>`);
        const camelcaseName = camelcase(item[0], {
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
            title: 'Copied.',
            description: `${item} icon was copied`,
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Container maxW="container.xl" mt="10">
            <InputGroup size="lg" my="10">
                <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1.2em"
                    // eslint-disable-next-line react/no-children-prop
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
            <Wrap style={wrapStyle}>
                {Object.entries(icons).map((item, index) => (
                    <WrapItem key={index}>
                        <Box
                            onClick={() => onClick(item[1])}
                            as="button"
                            shadow={shadow}
                            w={isMobile ? '130px' : '170px'}
                            h={isMobile ? '110px' : '120px'}
                            p="5"
                            borderRadius={4}
                        >
                            <VStack spacing={5}>
                                <img
                                    style={iconDim}
                                    src={`https://unpkg.com/sketch-icons@${packageJson.version}/main/${item[1][0]}.svg`}
                                    alt={`${item[0]}`}
                                />
                                <Text fontSize="md" isTruncated>
                                    {item[1][0]}
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
                                // eslint-disable-next-line react/no-children-prop
                                children={<Text color="blue.700">{webcomponent}</Text>}
                            />

                            <Button size="md" onClick={() => copyIcon(webcomponent)} ml={2}>
                                Copy
                            </Button>
                        </Flex>
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
                                // eslint-disable-next-line react/no-children-prop
                                children={<Text color="blue.700">{webicons}</Text>}
                            />

                            <Button size="md" onClick={() => copyIcon(webicons)} ml={2}>
                                Copy
                            </Button>
                        </Flex>
                        <br />
                        <Heading size="md" mb={4}>
                            Unicode Value
                        </Heading>
                        <Text size="md">The unicode value for the icon.</Text>
                        <br />
                        <Flex mb={4}>
                            <Code
                                flex="3"
                                p={2}
                                bg="blue.50"
                                borderRadius={6}
                                display="block"
                                whiteSpace="pre"
                                // eslint-disable-next-line react/no-children-prop
                                children={<Text color="blue.700">{unicode}</Text>}
                            />

                            <Button size="md" onClick={() => copyIcon(unicode)} ml={2}>
                                Copy
                            </Button>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Container>
    );
};

export default IconGrid;
