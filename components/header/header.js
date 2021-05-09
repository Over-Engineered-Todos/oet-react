import { Box, Heading } from "@chakra-ui/layout";

function Header() {
  return (
    <Box as="header">
      <Box as="nav" padding="4" borderBottomWidth="1px">
        <Heading as="h1" size="sm">
          Todo Application
        </Heading>
      </Box>
    </Box>
  );
}

export default Header;
