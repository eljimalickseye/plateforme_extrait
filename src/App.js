import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Theme from "./Theme";
import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Flex, Box, Stack, VStack, HStack } from "@chakra-ui/react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Authentication from "./components/Authentication/Authentication";
import { Avatar } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import Release from "./Services/Release";
import Forms from "./components/Forms/Forms";
function App() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <ChakraProvider className="App" theme={Theme}>
      <Flex justify="center" direction='column' align="center">
        <Header />
        <Box
          justify="center"
          direction="column"
          rowGap="20px"
          align="center"
          bgImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)),url('https://img.freepik.com/photos-gratuite/developpeur-serieux-tenant-ordinateur-portable-touchant-ecran-virtuel_74855-4735.jpg?size=626&ext=jpg')"
          bgSize="cover"
          bgPosition="center"
          h="90.6vh"
	  w="100%"
        >
         <Forms />
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
export default App;
