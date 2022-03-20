import {
  Container,
  Text,
  Heading,
  Code,
  Stack,
  Image,
    Link,
} from "@chakra-ui/react";
import Banner from '../assets/images/banner.svg'

const Usage = () => {
  const Style = {
    fontFamily: "system-ui",
  };

  return (
    <Container style={Style} maxW="container.xl" mt="5">
        <Image src={Banner} />
        <br />
      <Heading size="xl">Usage</Heading>
      <Text fontSize="lg" mt="5">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </Text>
      <br />
      <Heading size="lg">Installation</Heading>
      <Text fontSize="lg" mt="5">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups. Lorem
        ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups. Lorem
        ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </Text>
      <br />
      <Stack direction="column">
        <Code
          display="block"
          whiteSpace="pre"
          children={`
        npm i sketch-icons
        or
        yarn add sketch-icons
        `}
        />
      </Stack>
      <br />
      <Heading size="lg">Example</Heading>
      <br />
      <Code
        display="block"
        whiteSpace="pre"
        children={`
      import { PlayFill } from "sketch-icons";

        class Icons extends React.Component {
        render() {
            return (
            <h2>
                Here's a <PlayFill />
            </h2>
            );
        }
        }
      `}
      />
      <br />
      <Heading size="lg">Size</Heading>
      <Text fontSize="lg" mt="5">
        Lorem ipsum is <Code colorScheme="blue">width</Code>placeholder text
        commonly <Code colorScheme="blue">height</Code> used in the graphic,
        print, and publishing industries for previewing layouts and visual
        mockups.
      </Text>
      <br />
      <Code
        display="block"
        whiteSpace="pre"
        children={`
        import { ArrowUpCircle } from "sketch-icons";

        class Icons extends React.Component {
          render() {
            return (
              <h2>
                Go Up <ArrowUpCircle height={100} width={100} />
              </h2>
            );
          }
        }
      `}
      />
      <br />
      <Heading size="lg">Color</Heading>
      <Text fontSize="lg" mt="5">
        Lorem ipsum is <Code colorScheme="blue">color</Code>placeholder text
        commonly used in the graphic,
        print, and publishing industries for previewing layouts and visual
        mockups.
      </Text>
      <br />
      <Code
        display="block"
        whiteSpace="pre"
        children={`
        import { ArrowDown } from "sketch-icons";

        class Icons extends React.Component {
        render() {
            return (
            <h2>
                Move Down <ArrowDown color="#ffffff" />
            </h2>
            );
        }
        }
      `}
      />
      <br />
      <Heading size="lg">Stroke</Heading>
      <Text fontSize="lg" mt="5">
        Lorem ipsum is <Code colorScheme="blue">stroke</Code>placeholder text
        commonly used in the graphic,
        print, and publishing industries for previewing layouts and visual
        mockups.
      </Text>
      <br />
      <Code
        display="block"
        whiteSpace="pre"
        children={`
        import { ArrowDown } from "sketch-icons";

        class Icons extends React.Component {
          render() {
            return (
              <h2>
                Move Down <ArrowDown stroke="blue" />
              </h2>
            );
          }
        }
        
      `}
      />
       <br />
      <Heading size="lg">Stroke Width</Heading>
      <Text fontSize="lg" mt="5">
        Lorem ipsum is <Code colorScheme="blue">strokeWidth</Code>placeholder text
        commonly used in the graphic,
        print, and publishing industries for previewing layouts and visual
        mockups.
      </Text>
      <br />
      <Code
        display="block"
        whiteSpace="pre" 
        children={`
        import { ArrowDown } from "sketch-icons";

        class Icons extends React.Component {
          render() {
            return (
              <h2> 
                Move Down <ArrowDown strokeWidth="0.1" />
              </h2>
            );
          }
        }
        
      `}
      />
       <br />
      <Heading size="lg">Contributing</Heading>
      <Text mt="5">
  Did you know that{' '}
  <Link color='blue.500' href='#'>
    links can live inline with text
  </Link>
</Text> 
<br />
      <Heading size="lg">Code of Conduct</Heading>
      <Text mt="5">
  Did you know that{' '}
  <Link color='blue.500' href='#'>
    links can live inline with text
  </Link>
</Text> 
<br />
<br />
    </Container>
  );
};
export default Usage;
