import React from "react";
import { Box, Text, HStack, Image, Input } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";

function UserLogin() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box
      bg="aliceblue"
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <HStack h="70vh" width={{ base: "20%", md: "35%", xl: "50%" }}>
        <Box w="50%" h="100%" bg="#2874f0">
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-around"}
            h={"100%"}
          >
            <Text
              mt="15px"
              pl="33px"
              color="#fff"
              fontSize={{ base: "10px", md: "20px", xl: "28px" }}
              fontWeight={"500"}
            >
              LOGIN
              <Text mt="10px" pl="20px">
                Get access to your Orders, Wishlist and Recommendations
              </Text>
            </Text>

            <Image
              src="	https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
              alt="Flipkart"
              w={"250px"}
              mx={"auto"}
            />
          </Box>
        </Box>
        <Box px={6} w="60%" h="100%" bg="fixed">
          <FormControl mt={"20px"} gap={"10px"} isRequired>
            <FormLabel>First name</FormLabel>
            <Input placeholder="First name" />
            <FormLabel>Last name</FormLabel>
            <Input placeholder="Last Name" />
          </FormControl>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
      </HStack>
    </Box>
  );
}

export default UserLogin;
