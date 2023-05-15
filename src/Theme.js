import { extendTheme } from "@chakra-ui/react"

const Theme = extendTheme({
  colors: {
    brand: {
      500: "#007bff",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Open Sans",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        borderRadius: "md",
      },
      variants: {
        solid: {
          bg: "brand.500",
          color: "white",
          _hover: {
            bg: "brand.600",
          },
        },
      },
      sizes: {
        md: {
          fontSize: "md",
          px: 6,
          py: 3,
        },
      },
    },
  },
})

export default Theme;
