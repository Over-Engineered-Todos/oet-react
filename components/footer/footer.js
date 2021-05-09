import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      as="footer"
      width="100%"
      height="100px"
      borderTop="1px solid #eaeaea"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Link
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
        isExternal
      >
        Powered by{" "}
        <Box as="span" height="1em" marginLeft="0.5rem">
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </Box>
      </Link>
    </Box>
  );
}

export default Footer;
