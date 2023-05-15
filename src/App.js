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
function App() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [currentStep, setCurrentStep] = React.useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <ChakraProvider className="App" theme={Theme}>
      <Flex justify="center" direction="column" align="center">
        <Header />
        <Box
          justify="center"
          direction="column"
          rowGap="20px"
          align="center"
          bgImage="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('https://fotomelia.com/wp-content/uploads/2016/05/photos-gratuites-libres-de-droits-260-1560x1114.jpg')"
          bgSize="cover"
          bgPosition="center"
          h="743.5px"
          w="100%"
        >
          <Box mt="20px" height="150px" color="white" width="100%">
            <Stack
              spacing={0.1}
              className="text"
              fontWeight="bold"
              textShadow="1px 1px #000000, -1px -1px #ffffff"
            >
              <Text fontSize="xl">Votre espace etat civil</Text>
              <Text fontSize="xl">electronique. Delivrer des papiers</Text>
              <Text fontSize="xl" borderBottom="1px">
                administratifs, partout!
              </Text>
            </Stack>
          </Box>

          <Box>test</Box>
          <Box>
            {currentStep === 1 && (
              <Box>
                {/* Formulaire - Partie 1 */}
                <p>Formulaire - Partie 1</p>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                  columnGap="10px"
                >
                  <Box
                    w="400px"
                    h="400px"
                    bg="grey"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    rowGap="10px"
                  >
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="105px"
                        bg="black"
                        p="5px"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          borderRadius: "5px",
                        }}
                      >
                        Login
                      </FormLabel>
                      <Input width="250px" bg="white" />
                    </FormControl>
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="105px"
                        bg="black"
                        p="5px"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          borderRadius: "5px",
                        }}
                      >
                        Login
                      </FormLabel>
                      <Input width="250px" bg="white" />
                    </FormControl>
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="105px"
                        bg="black"
                        p="5px"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          borderRadius: "5px",
                        }}
                      >
                        Login
                      </FormLabel>
                      <Input width="250px" bg="white" />
                    </FormControl>
                  </Box>
                  <Box
                    w="400px"
                    h="400px"
                    bg="grey"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    rowGap="10px"
                  >
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="105px"
                        bg="black"
                        p="5px"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          borderRadius: "5px",
                        }}
                      >
                        Login
                      </FormLabel>
                      <Input width="250px" bg="white" />
                    </FormControl>
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="105px"
                        bg="black"
                        p="5px"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          borderRadius: "5px",
                        }}
                      >
                        Login
                      </FormLabel>
                      <Input width="250px" bg="white" />
                    </FormControl>
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="105px"
                        bg="black"
                        p="5px"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          borderRadius: "5px",
                        }}
                      >
                        Login
                      </FormLabel>
                      <Input width="250px" bg="white" />
                    </FormControl>
                  </Box>
                </Box>
                <Button onClick={handleNext}>Suivant</Button>
              </Box>
            )}
            {currentStep === 2 && (
              <Box>
                {/* Formulaire - Partie 2 */}
                <p>Formulaire - Partie 2</p>
                {/* Contenu de la deuxième partie du formulaire */}
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                  columnGap="10px"
                >
                  <Box
                    w="400px"
                    h="400px"
                    bg="grey"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    rowGap="10px"
                  >
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="105px"
                        bg="black"
                        p="5px"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          borderRadius: "5px",
                        }}
                      >
                        Login
                      </FormLabel>
                      <Input width="250px" bg="white" />
                    </FormControl>
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="105px"
                        bg="black"
                        p="5px"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          borderRadius: "5px",
                        }}
                      >
                        Login
                      </FormLabel>
                      <Input width="250px" bg="white" />
                    </FormControl>
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="105px"
                        bg="black"
                        p="5px"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          borderRadius: "5px",
                        }}
                      >
                        Login
                      </FormLabel>
                      <Input width="250px" bg="white" />
                    </FormControl>
                  </Box>
                  <Box
                    w="400px"
                    h="400px"
                    bg="grey"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    rowGap="10px"
                  >
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="105px"
                        bg="black"
                        p="5px"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          borderRadius: "5px",
                        }}
                      >
                        Login
                      </FormLabel>
                      <Input width="250px" bg="white" />
                    </FormControl>
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="105px"
                        bg="black"
                        p="5px"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          borderRadius: "5px",
                        }}
                      >
                        Login
                      </FormLabel>
                      <Input width="250px" bg="white" />
                    </FormControl>
                    <FormControl
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <FormLabel
                        width="105px"
                        bg="black"
                        p="5px"
                        style={{
                          color: "white",
                          display: "flex",
                          justifyContent: "center",
                          borderRadius: "5px",
                        }}
                      >
                        Login
                      </FormLabel>
                      <Input width="250px" bg="white" />
                    </FormControl>
                  </Box>
                </Box>
                <Button onClick={handlePrev}>Précédent</Button>
                <Button onClick={handleNext}>Suivant</Button>
              </Box>
            )}
            {currentStep === 3 && (
              <Box>
                {" "}
                {/* Formulaire - Partie 3 */} <p>Formulaire - Partie 3</p>
                {/* Contenu de la troisième partie du formulaire */}
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="center"
                  columnGap="10px"
                >
                  <Box w="400px" h="400px" bg="grey">
                    test
                  </Box>
                  <Box w="400px" h="400px" bg="white">
                    test
                  </Box>
                </Box>
                <Button onClick={handlePrev}>Précédent</Button>
                <Button type="submit">Soumettre</Button>
              </Box>
            )}
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>
  );
}
export default App;
