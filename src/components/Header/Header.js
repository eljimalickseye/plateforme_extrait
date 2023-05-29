import { Image, Box } from '@chakra-ui/react'
import { Text } from "@chakra-ui/react";
function Header() {
  return (
    <>
      <Box
        bg="#12393f"
	bgImage="linear-gradient(0deg, #12393f 0%, #309589 100%)"
        w="100%"
        h="75px"
	fontSize="20px"
	fontWeight="600"
        color="white"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
	<Box mb="5px" width="20%">
		<Image
		width="45%"
    		src={require('./image/logo.png')}
    		alt='logo'/>
	</Box>
        <Box width="45%" paddingLeft="30px">
		<Text fontSize="3xl" fontFamily="system-ui">
			Un Peuple - Un But - Une Foi
		</Text>
	</Box>
        <Box mb="5px">
                <Image
                width="60px"
                src={require('./image/devise_logo.png')}
                alt='logo'/>
        </Box>
      </Box>
    </>
  );
}

export default Header;
