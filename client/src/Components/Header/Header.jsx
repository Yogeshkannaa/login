import { Box, useColorModeValue, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Text p={5} textAlign={"center"} fontSize={"3xl"}>
          LoginPage
        </Text>
      </Box>
    </>
  );
}
