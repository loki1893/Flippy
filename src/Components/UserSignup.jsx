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
  Flex,
  Stack,
} from "@chakra-ui/react";

function UserSignup() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <HStack
        border="3px solid aliceblue"
        h="70vh"
        width={{ base: "20%", md: "35%", xl: "50%" }}
      >
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
              SIGN UP
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
        <Box bg="aliceblue" px={6} p="15px" w="60%" h="100%">
          <Stack spacing={3}>
            <FormControl isRequired>
              <FormLabel>First name</FormLabel>
              <Input placeholder="First name" />
            </FormControl>
            <FormControl>
              <FormLabel m>Last name</FormLabel>
              <Input placeholder="Last Name" />
            </FormControl>
            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input type="tel" />
            </FormControl>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <Flex direction="column" align="flex-start">
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  name="password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>
            <Flex direction="column" align="flex-start">
              <FormLabel>Comfirm Password</FormLabel>
              <InputGroup size="md">
                <Input
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  name="password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>
            <Button w={"100%"} color={"white"} pl={"10px"} bg={"#ff9f00"}>
              SIGN UP
            </Button>
            <Button mt={"10px"} color={"white"} w={"100%"} pl={"10px"} bg={"#fb641b"}> Alreay have an account  LOGIN         
            </Button>
          </Stack>
        </Box>
      </HStack>
    </Box>
  );
}

export default UserSignup;
