import "../../App.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Flex, Box, Stack } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

function Authentication() {
  return (
    <>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        justify="center"
        direction="row"
        align="center"
      >
        <Box
          style={{ display: "flex", flexDirection: "column", rowGap: "0px" }}
        >
          <Box
            color="white"
            mt="50px"
            w="500px"
            h="100px"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
          <Box
            color="gold"
            mt="30px"
            w="500px"
            h="200px"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack
              spacing={-1}
              className="text"
              fontWeight="bold"
              textShadow="1px 1px #000000, -1px -1px #ffffff"
            >
              <Text fontSize="4xl" marginBottom="0.5rem">
                Plateforme de
              </Text>
              <Text fontSize="4xl" marginBottom="0.5rem">
                livraison de fichier
              </Text>
              <Text fontSize="4xl" marginBottom="0.5rem">
                Etat Civil
              </Text>
            </Stack>
          </Box>
          <Box
            color="red"
            w="500px"
            h="200px"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack
              spacing={0.1}
              className="text"
              fontWeight="bold"
              textShadow="1px 1px #000000, -1px -1px #ffffff"
            >
              <Text fontSize="xl">Simplifier vous votre demarche</Text>
              <Text fontSize="xl">de delivrance de document Etat</Text>
              <Text fontSize="xl">Civil</Text>
            </Stack>
          </Box>
        </Box>
        <Box
          bg="rgba(255, 0, 0, 0.8)"
          w="450px"
          h="500px"
          mt="20px"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            bg="rgba(0, 128, 0, 0.65)"
            w="400px"
            h="400px"
            className="incliner"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Text fontSize="2xl" className="decliner" color="white">
              authentication
            </Text>
            <Box
              bg="rgba(0, 0, 0, 0.5)"
              w="340px"
              h="390px"
              className="decliner"
              mt="10px"
              pt="10px"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                rowGap: "20px",
              }}
            >
              // zone de conexion
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
                  opacity: "1",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <FormLabel
                  bg="black"
                  width="100px"
                  p="5px"
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "5px",
                  }}
                >
                  password
                </FormLabel>
                <Input type="email" width="250px" bg="white" />
              </FormControl>
              <Button colorScheme="blue" size="md">
                Cliquez-moi
              </Button>
              //zone de connexion
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Authentication;
