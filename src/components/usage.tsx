import packageJson from "sketch-icons/package.json"; 
import {
  Container,
  Text,
  Heading,
  Code,
  Stack,
  Image,
  Link,
  Badge,
} from "@chakra-ui/react";
import Banner from "../assets/images/banner.svg";

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
        Sketch icons is a completely open-source icon set with 300+ icons that
        makes it easy for individuals to utilise icons. The Sketch-icons Web
        Component is a simple and effective way to incorporate Sketch icons into
        your app. The component will dynamically load an SVG for each icon,
        ensuring that your app only requests the icons it requires.
      </Text>
      <br />
      <Stack direction="row">
        <Badge fontSize="md" colorScheme="blue">
          yarn : 1.22.17
        </Badge>
        <Badge fontSize="md" colorScheme="red">
          npm : 6.14.16
        </Badge>
        <Badge fontSize="md" colorScheme="green">
          license : MIT
        </Badge>
      </Stack>
      <br />

      <Heading size="lg">Installation</Heading>
      <Text fontSize="lg" mt="5">
        For those who use the npm or yarn package managers, the Sketch icon
        packages make it simple to keep your project up to date with the latest
        icons and improvements.
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
      <Heading size="lg">Using CDN</Heading>
      <br />
      <Text fontSize="lg" mt="5">
        If you want to use the icons in your project, you can use the CDN. Add
        the following cdn to your HTML file.
      </Text>
      <br />
        <Code
          display="block"
          whiteSpace="pre"
          children={`
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/sketch-icons@${packageJson.version}/dist/cdn/icons.css" />        
        `}
        />
      <br />
      <Heading size="lg">Example</Heading>
      <Text fontSize="lg" mt="5">To utilize the pre-built icon from the sketch icons bundle, populate the <Code colorScheme="blue">class</Code> property on the <Code colorScheme="blue">i</Code>  tag</Text>
      <br />
      <Code
        display="block"
        whiteSpace="pre"
        children={`
        <head>
          ...
          <link rel="stylesheet" type="text/css" href="https://unpkg.com/sketch-icons@${packageJson.version}/dist/cdn/icons.css" />  
          ...              
        </head>
        <body>
          ...
          <i class="sk sk-alarm-fill"></i> 
          ...
        </body> 
      `}
      />
      
      <br />
      <Heading size="lg">Using CSS Selector</Heading>
      <Text fontSize="lg" mt="5">
       You can change the properties of icon using the css selector. The selector is <Code colorScheme="blue">.sk-</Code> followed by the icon name.      
      </Text>
      <br />
        <Code
          display="block"
          whiteSpace="pre"
          children={`
            .sk-alarm-fill {
              color: red;
              font-size: 35px;
            }       
        `}
        />
      <br />
      <Heading size="lg">Size</Heading>
      <Text fontSize="lg" mt="5">
        You can use the <Code colorScheme="blue">height</Code> and{" "}
        <Code colorScheme="blue">width</Code> attributes for our pre-defined
        icon sizes to specify the icon <Code>height</Code> and{" "}
        <Code>width</Code> .
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
        You can utilise the <Code colorScheme="blue">color</Code> attribute for
        our pre-defined icon color to specify the icon <Code>color</Code>.
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
        You can utilise the <Code colorScheme="blue">stroke</Code> attribute for
        our pre-defined icon stroke to determine the icon <Code>stroke</Code>.
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
        You can use the <Code colorScheme="blue">strokeWidth</Code> attribute
        for our pre-defined icon strokeWidth to specify the icon{" "}
        <Code>strokeWidth</Code> . Lorem ipsum isplaceholder text commonly used
        in the graphic, print, and publishing industries for previewing layouts
        and visual mockups.
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
        Refer to the{" "}
        <Link
          color="blue.500"
          href="https://github.com/garudatechnologydevelopers/Sketch-icons/blob/main/CONTRIBUTING.md"
        >
          Contribution
        </Link>{" "}
        for more information.
      </Text>
      <br />
      <Heading size="lg">Code of Conduct</Heading>
      <Text mt="5">
        Refer to the{" "}
        <Link
          color="blue.500"
          href="https://github.com/garudatechnologydevelopers/Sketch-icons/blob/main/CODE_OF_CONDUCT.md"
        >
          Code of Conduct
        </Link>{" "}
        for more information.
      </Text>
      <br />
      <Heading size="lg">Edit this Document</Heading>
      <Text mt="5">
        To make changes to this document, go to the{" "}
        <Link
          color="blue.500"
          href="https://github.com/garudatechnologydevelopers/sketch-icons-website"
        >
          Docs.
        </Link>
      </Text>
      <br />
      <br />
    </Container>
  );
};
export default Usage;
