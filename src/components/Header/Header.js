import { Box } from "@chakra-ui/react";

function Header() {
  return (
    <>
      <Box
        bg="green"
        w="100%"
        h="50px"
        color="white"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Un peuple - Un but - Une foi
      </Box>
    </>
  );
}

export default Header;
