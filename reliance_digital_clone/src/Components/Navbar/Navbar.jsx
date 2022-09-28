import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  ButtonGroup,
  Img,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Text,
  Center,
  Square,
  Link,
  Portal,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";

import { FaAngleDown, FaShoppingCart, FaUser,FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineMyLocation } from "react-icons/md";

function Navbar() {
  return (
    <div>
      <Box>
      <Flex
          
          gap="2"
          bg="#e42529"
          p="8px"
          pl="48px"
          pr="16px"
          justifyContent="flex-end"
          w="full"
          fontSize="14px"
          fontWeight="500"
        >
          
          <Box display="flex" color="white">
          <Box
              Box
              display="flex"
              gap="2"
              alignItems="baseline"
              borderRight="1px"
              px="8px"
            >
              <FaMapMarkerAlt />
              <Link color="white">Find a Store</Link>
            </Box>

            <Box
              Box
              display="flex"
              gap="2"
              alignItems="baseline"
              borderRight="1px"
              px="8px"
            >
              
              <Link color="white">Buying Guides</Link>
            </Box>

            <Box
              display="flex"
              gap="2"
              alignItems="baseline"
              borderRight="1px"
              px="6px"
            >
              <Link color="white">Contact us</Link>
            </Box>
          </Box>
        </Flex>

        <Flex
          alignItems="center"
          gap="2"
          bg="#e42529"
          p="8px"
          pl="48px"
          pr="16px"
          justifyContent="space-between"
          w="full"
          fontSize="14px"
          fontWeight="500"
        >
          <Box p="2">
            <Link>
              <Img
                src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg"
                w="150px"
                h="50px"
              />
            </Link>
          </Box>

          <Stack spacing={4}>
            <InputGroup w="500px">
              <Input
                bg="white"
                placeholder="Find your favorite products"
                borderRadius="80px"
              />
              <InputRightElement children={<SearchIcon color="gray.500" />} />
            </InputGroup>
          </Stack>

          <Box display="flex" color="white">
          <Box
              Box
              display="flex"
              gap="2"
              alignItems="baseline"
              borderRight="1px"
              px="8px"
            >
              <FaMapMarkerAlt />

              <Popover >
  <PopoverTrigger>
  <Link color="white">Enter Your PIN</Link>
  </PopoverTrigger>
  <Portal>
    <PopoverContent w="400px">
      <PopoverArrow />
      <PopoverHeader bg='#2d73ed' color="white">Choose your delivery location</PopoverHeader>
      <PopoverCloseButton color="white" fontWeight="bold"/>
      <PopoverBody>
        <Box display="flex" alignItems="baseline" gap="8px">
        <Input  w="full" placeholder="Enter Your Delivery PIN Code" type="number"/>
        <Button colorScheme='blue' >Apply</Button>

        </Box>
        
        
      </PopoverBody>
      <PopoverFooter color="#2d73ed"><Icon as={MdOutlineMyLocation} />Detect My Location</PopoverFooter>
    </PopoverContent>
  </Portal>
</Popover>
              
            </Box>

            <Box
              Box
              display="flex"
              gap="2"
              alignItems="baseline"
              borderRight="1px"
              px="8px"
            >
              <FaShoppingCart />
              <Link color="white">Cart</Link>
            </Box>

            <Box
              display="flex"
              gap="2"
              alignItems="baseline"
              borderRight="1px"
              px="6px"
            >
              <FaUser />
              <Link color="white">Log in</Link>
            </Box>
          </Box>
        </Flex>

        <Box bg="#003380" px="27px">
          <Popover trigger="hover" offset={0}>
            <PopoverTrigger >
              <Button  
                bg
                color="white"
                borderRadius={0}
                _hover={{
                  background: "#e42529",
                  color: "white",
                }}
              >
                Click me
                <Icon as={ChevronDownIcon}/>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              w="1300px"
              mr="27px"
              ml="27px"
            >
              <PopoverBody>

                <Flex color="white" bg="#0a244a">
                  <Center w="100px">
                    <Text>Box 1</Text>
                  </Center>
                  <Square size="150px">
                    <Text>Box 2</Text>
                  </Square>
                  <Box flex="1">
                    <Text>Box 3</Text>
                  </Box>
                </Flex>

              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Box>
      </Box>
    </div>
  );
}

export default Navbar;
