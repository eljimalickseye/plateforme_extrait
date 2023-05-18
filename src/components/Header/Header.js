import { Image, Box } from '@chakra-ui/react'
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
	<Box mb="5px">
		<Image
		width="200px"
    		src={require('./image/logo.png')}
    		alt='logo'/>
	</Box>
        <Box>Un Peuple - Un But - Une Foi</Box>
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
