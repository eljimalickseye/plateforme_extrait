import "../../App.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Flex, Box, Stack } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'

function Authentication() {
  return (
    <>
      <Box
	overflow="hidden"
	position="relative"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
        justify="center"
        direction="row"
        align="center"
      >
        <Box
          style={{ display: "flex", flexDirection: "column", rowGap: "0px",
	  justifyContent:"space-between" }}
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
              fontSize="24px"
	      fontFamily="system-ui"
            >
              <Text>Votre espace etat civil</Text>
              <Text>electronique. Delivrer des papiers</Text>
              <Text borderBottom="1px">
                administratifs, partout!
              </Text>
            </Stack>
          </Box>
          <Box
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
              color="#f9b900"
              fontFamily="system-ui"
	      fontSize="41px"
	      fontWeight="700"
	      textShadow="0 0 10px rgba(0,0,0,0.8)"
            >
              <Text marginBottom="0.5rem">
                Plateforme de
              </Text>
              <Text marginBottom="0.5rem">
                livraison de fichier
              </Text>
              <Text marginBottom="0.5rem">
                Etat Civil
              </Text>
            </Stack>
          </Box>
        </Box>
        <Box
         
          w="410px"
          h="500px"
          mt="20px"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >

            <Box
              bg="rgba(0, 0, 0, 1)"
              w="340px"
              h="390px"
              mt="10px"
	      pb="20px"
              pt="10px"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                rowGap: "50px",
              }}
            >
        <Box mb="5px">
                <Image
                width="53px"
                src={require('./image/devise_logo.png')}
                alt='logo'/>
        </Box>

              <FormControl
		position="relative"
		color= "#e8b500"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <FormLabel
		  position="absolute"
                  width="105px"
                  bg="black"
		  border="1px #e8b500 solid"
                  p="5px"
		  fontFamily="system-ui"
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "5px",
		    top:"-28px",
		    zIndex:1,
                  }}
                >
                  Login
                </FormLabel>
                <Input width="250px" bg="white" />
              </FormControl>
              <FormControl
		position="relative"
                style={{
                  display: "flex",
                  alignItems: "center",
                  opacity:"1",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <FormLabel
		  position="absolute"
                  bg="black"
                  width="100px"
                  p="5px"
		  fontFamily="system-ui"
                  border="1px #e8b500 solid"
                  style={{
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "5px",
                    top:"-28px",
                    zIndex:1,
                  }}
                >
                  password
                </FormLabel>
                <Input type="email" width="250px" bg="white" />
              </FormControl>
              <Button bg="#0e5e33" size="md">
                connecter
              </Button>
          </Box>
        </Box>
      </Box>
          <Box
            w="100%"
	    mt="100px"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack
              spacing={0.1}
              className="text"
              color="#fff"
              fontWeight="700"
              fontFamily="system-ui"
            >
              <Text fontSize="xl">
                <marquee>
                Simplifier vous votre demarche
                de delivrance de document Etat Civil.
                </marquee>
              </Text>
            </Stack>
          </Box>

    </>
  );
}

export default Authentication;
