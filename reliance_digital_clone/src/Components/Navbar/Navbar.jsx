import React from "react";
import {Link} from "react-router-dom"

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
  Portal,
  HStack,
  List,
  ListItem
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";

import {
  FaAngleDown,
  FaShoppingCart,
  FaUser,
  FaMapMarkerAlt,
} from "react-icons/fa";
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
          
          fontSize="14px"
          fontWeight="500"
          
        >
          <Box p="2">
            <Link to="/">
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

              <Popover>
                <PopoverTrigger>
                  <Link color="white">Enter Your PIN</Link>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent w="400px">
                    <PopoverArrow />
                    <PopoverHeader bg="#2d73ed" color="white">
                      Choose your delivery location
                    </PopoverHeader>
                    <PopoverCloseButton color="white" fontWeight="bold" />
                    <PopoverBody>
                      <Box display="flex" alignItems="baseline" gap="8px">
                        <Input
                          w="full"
                          placeholder="Enter Your Delivery PIN Code"
                          type="number"
                        />
                        <Button colorScheme="blue">Apply</Button>
                      </Box>
                    </PopoverBody>
                    <PopoverFooter color="#2d73ed">
                      <Icon as={MdOutlineMyLocation} />
                      Detect My Location
                    </PopoverFooter>
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
              
              px="6px"
            >
              <FaUser />
              <Link to="/login" color="white">Log in</Link>
            </Box>
          </Box>
        </Flex>


        <Flex display="flex"  bg="#003380" px="27px" justifyContent="space-between">
          <Popover trigger="hover" offset={0} boundary="0">
            <PopoverTrigger>
              <Button
                bg
                color="white"
                borderRadius={0}
                _hover={{
                  background: "#e42529",
                  color: "white",
                }}
                fontSize="13px"
              >
                MOBILES & TABLETS
                <Icon as={ChevronDownIcon} />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="1300px" mr="27px" ml="27px" border="0">
            <Flex  bg="purple.900" color="white" fontSize="13px" pl="34px" py="12px" gap="40px">
                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs'><Link>Smartphones</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Wearable Technology</Link></Heading>
                      <List spacing="8px">
                        <ListItem><Link>Apple Watches Price Drop</Link></ListItem>
                        <ListItem><Link>Smartwatch @ Rs.999</Link></ListItem> 
                        <ListItem> <Link>Apple Essentials</Link> </ListItem>

                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Accessories</Link></Heading>
                      <List spacing="8px">
                      <ListItem> <Link>Tablet Accessories</Link></ListItem>
                      <ListItem> <Link>Mobile Accessories</Link></ListItem>
                      <ListItem><Link>Mobile Grips & Stands</Link></ListItem>
                      <ListItem><Link>Car Mobile Holders</Link></ListItem>
                      <ListItem> <Link>Memory Cards</Link></ListItem>

                      </List>

                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs'><Link>Headphones & Headsets</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Tablets & eReaders</Link></Heading>
                      <List spacing="8px">
                        <ListItem><Link>Every day use Tablets below 15000</Link></ListItem>
                        <ListItem><Link>Premium Tablets, Above 15001</Link></ListItem> 
                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Power Banks</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>eSlates</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>All Learning Robots</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <img src="https://www.reliancedigital.in/medias/One-Plus-10R-Mobile-Phone-492850198-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDAwOHxpbWFnZS9qcGVnfGltYWdlcy9oMWUvaDk5Lzk4NzM5Nzg1MjM2NzguanBnfDM3N2IxOGQ0MmQ2YTZjMmUyZDcwYWRlNmI2MThjMDM5OTYwNDE2NzUyZDQ2M2E5OTYwODczNzU1OTIxYjBlYTM" alt="" />

                  
                  </Flex>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover" offset={0} boundary="0">
            <PopoverTrigger>
              <Button
                bg
                color="white"
                borderRadius={0}
                _hover={{
                  background: "#e42529",
                  color: "white",
                }}
                fontSize="13px"
              >
                TELEVISIONS
                <Icon as={ChevronDownIcon} />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="1300px" mr="27px" ml="27px" border="0">
            <Flex  bg="purple.900" color="white" fontSize="13px" pl="34px" py="12px" gap="40px">
                    <List spacing="18px">
                     
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Televisions</Link></Heading>
                      <List spacing="8px">
                        <ListItem><Link>Smart TVs</Link></ListItem>
                        <ListItem><Link>32 Inch TVs</Link></ListItem>
                        <ListItem><Link>43 Inch TVs TVs</Link></ListItem>
                        <ListItem><Link>55 Inch TVs TVs</Link></ListItem>
                        <ListItem><Link>Android TVs</Link></ListItem>

                      </List>

                      </Box>

                    </List>

                    <List spacing="18px">
                      
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Gaming</Link></Heading>
                      <List spacing="8px">
                        <ListItem><Link>Gaming Consoles</Link></ListItem>
                        <ListItem><Link>Gaming Accessories</Link></ListItem> 
                        <ListItem><Link>Gaming Titles</Link></ListItem> 
                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Projectorss</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Steaming Devices</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Reconnect Disney | Marvel Audio Collection </Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>TV & Audio Accessories</Link></Heading>
                      <List spacing="8px">
                        <ListItem><Link>Virtual Reality Headsets</Link></ListItem>
                        <ListItem><Link>Stabilizers & Surge Protectors</Link></ListItem> 
                        
                      </List>

                      </Box>
                      
                      
                    </List>

                    

                  
                  </Flex>
            </PopoverContent>
          </Popover>
          <Popover trigger="hover" offset={0} boundary="0">
            <PopoverTrigger>
              <Button
                bg
                color="white"
                borderRadius={0}
                _hover={{
                  background: "#e42529",
                  color: "white",
                }}
                fontSize="13px"
              >
                AUDIO
                <Icon as={ChevronDownIcon} />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="1300px" mr="27px" ml="27px" border="0">
            <Flex  bg="purple.900" color="white" fontSize="13px" pl="34px" py="12px" gap="40px">
                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs'><Link>Smartphones</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Wearable Technology</Link></Heading>
                      <List spacing="8px">
                        <ListItem><Link>Apple Watches Price Drop</Link></ListItem>
                        <ListItem><Link>Smartwatch @ Rs.999</Link></ListItem> 
                        <ListItem> <Link>Apple Essentials</Link> </ListItem>

                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Accessories</Link></Heading>
                      <List spacing="8px">
                      <ListItem> <Link>Tablet Accessories</Link></ListItem>
                      <ListItem> <Link>Mobile Accessories</Link></ListItem>
                      <ListItem><Link>Mobile Grips & Stands</Link></ListItem>
                      <ListItem><Link>Car Mobile Holders</Link></ListItem>
                      <ListItem> <Link>Memory Cards</Link></ListItem>

                      </List>

                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs'><Link>Headphones & Headsets</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Tablets & eReaders</Link></Heading>
                      <List spacing="8px">
                        <ListItem><Link>Every day use Tablets below 15000</Link></ListItem>
                        <ListItem><Link>Premium Tablets, Above 15001</Link></ListItem> 
                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Power Banks</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>eSlates</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>All Learning Robots</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <img src="https://www.reliancedigital.in/medias/One-Plus-10R-Mobile-Phone-492850198-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDAwOHxpbWFnZS9qcGVnfGltYWdlcy9oMWUvaDk5Lzk4NzM5Nzg1MjM2NzguanBnfDM3N2IxOGQ0MmQ2YTZjMmUyZDcwYWRlNmI2MThjMDM5OTYwNDE2NzUyZDQ2M2E5OTYwODczNzU1OTIxYjBlYTM" alt="" />

                  
                  </Flex>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover" offset={0} boundary="0">
            <PopoverTrigger>
              <Button
                bg
                color="white"
                borderRadius={0}
                _hover={{
                  background: "#e42529",
                  color: "white",
                }}
                fontSize="13px"
              >
                HOME APPLIANCES
                <Icon as={ChevronDownIcon} />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="1300px" mr="27px" ml="27px" border="0">
            <Flex  bg="purple.900" color="white" fontSize="13px" pl="34px" py="12px" gap="40px">
                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs'><Link>Smartphones</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Wearable Technology</Link></Heading>
                      <List spacing="8px">
                        <ListItem><Link>Apple Watches Price Drop</Link></ListItem>
                        <ListItem><Link>Smartwatch @ Rs.999</Link></ListItem> 
                        <ListItem> <Link>Apple Essentials</Link> </ListItem>

                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Accessories</Link></Heading>
                      <List spacing="8px">
                      <ListItem> <Link>Tablet Accessories</Link></ListItem>
                      <ListItem> <Link>Mobile Accessories</Link></ListItem>
                      <ListItem><Link>Mobile Grips & Stands</Link></ListItem>
                      <ListItem><Link>Car Mobile Holders</Link></ListItem>
                      <ListItem> <Link>Memory Cards</Link></ListItem>

                      </List>

                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs'><Link>Headphones & Headsets</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Tablets & eReaders</Link></Heading>
                      <List spacing="8px">
                        <ListItem><Link>Every day use Tablets below 15000</Link></ListItem>
                        <ListItem><Link>Premium Tablets, Above 15001</Link></ListItem> 
                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Power Banks</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>eSlates</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>All Learning Robots</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <img src="https://www.reliancedigital.in/medias/One-Plus-10R-Mobile-Phone-492850198-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDAwOHxpbWFnZS9qcGVnfGltYWdlcy9oMWUvaDk5Lzk4NzM5Nzg1MjM2NzguanBnfDM3N2IxOGQ0MmQ2YTZjMmUyZDcwYWRlNmI2MThjMDM5OTYwNDE2NzUyZDQ2M2E5OTYwODczNzU1OTIxYjBlYTM" alt="" />

                  
                  </Flex>
            </PopoverContent>
          </Popover>


          <Popover trigger="hover" offset={0} boundary="0">
            <PopoverTrigger>
              <Button
                bg
                color="white"
                borderRadius={0}
                _hover={{
                  background: "#e42529",
                  color: "white",
                }}
                fontSize="13px"
              >
                COMPUTERS
                <Icon as={ChevronDownIcon} />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="1300px" mr="27px" ml="27px" border="0">
            <Flex  bg="purple.900" color="white" fontSize="13px" pl="34px" py="12px" gap="40px">
                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs'><Link>Smartphones</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Wearable Technology</Link></Heading>
                      <List spacing="8px">
                        <ListItem><Link>Apple Watches Price Drop</Link></ListItem>
                        <ListItem><Link>Smartwatch @ Rs.999</Link></ListItem> 
                        <ListItem> <Link>Apple Essentials</Link> </ListItem>

                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Accessories</Link></Heading>
                      <List spacing="8px">
                      <ListItem> <Link>Tablet Accessories</Link></ListItem>
                      <ListItem> <Link>Mobile Accessories</Link></ListItem>
                      <ListItem><Link>Mobile Grips & Stands</Link></ListItem>
                      <ListItem><Link>Car Mobile Holders</Link></ListItem>
                      <ListItem> <Link>Memory Cards</Link></ListItem>

                      </List>

                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs'><Link>Headphones & Headsets</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Tablets & eReaders</Link></Heading>
                      <List spacing="8px">
                        <ListItem><Link>Every day use Tablets below 15000</Link></ListItem>
                        <ListItem><Link>Premium Tablets, Above 15001</Link></ListItem> 
                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Power Banks</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>eSlates</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>All Learning Robots</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <img src="https://www.reliancedigital.in/medias/One-Plus-10R-Mobile-Phone-492850198-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDAwOHxpbWFnZS9qcGVnfGltYWdlcy9oMWUvaDk5Lzk4NzM5Nzg1MjM2NzguanBnfDM3N2IxOGQ0MmQ2YTZjMmUyZDcwYWRlNmI2MThjMDM5OTYwNDE2NzUyZDQ2M2E5OTYwODczNzU1OTIxYjBlYTM" alt="" />

                  
                  </Flex>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover" offset={0} boundary="0">
            <PopoverTrigger>
              <Button
                bg
                color="white"
                borderRadius={0}
                _hover={{
                  background: "#e42529",
                  color: "white",
                }}
                fontSize="13px"
              >
                CAMERAS
                <Icon as={ChevronDownIcon} />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="1300px" mr="27px" ml="27px" border="0">
            <Flex  bg="purple.900" color="white" fontSize="13px" pl="34px" py="12px" gap="40px">
                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs'><Link>Smartphones</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Wearable Technology</Link></Heading>
                      <List spacing="8px">
                        <ListItem><Link>Apple Watches Price Drop</Link></ListItem>
                        <ListItem><Link>Smartwatch @ Rs.999</Link></ListItem> 
                        <ListItem> <Link>Apple Essentials</Link> </ListItem>

                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Accessories</Link></Heading>
                      <List spacing="8px">
                      <ListItem> <Link>Tablet Accessories</Link></ListItem>
                      <ListItem> <Link>Mobile Accessories</Link></ListItem>
                      <ListItem><Link>Mobile Grips & Stands</Link></ListItem>
                      <ListItem><Link>Car Mobile Holders</Link></ListItem>
                      <ListItem> <Link>Memory Cards</Link></ListItem>

                      </List>

                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs'><Link>Headphones & Headsets</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Tablets & eReaders</Link></Heading>
                      <List spacing="8px">
                        <ListItem><Link>Every day use Tablets below 15000</Link></ListItem>
                        <ListItem><Link>Premium Tablets, Above 15001</Link></ListItem> 
                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Power Banks</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>eSlates</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>All Learning Robots</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <img src="https://www.reliancedigital.in/medias/One-Plus-10R-Mobile-Phone-492850198-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDAwOHxpbWFnZS9qcGVnfGltYWdlcy9oMWUvaDk5Lzk4NzM5Nzg1MjM2NzguanBnfDM3N2IxOGQ0MmQ2YTZjMmUyZDcwYWRlNmI2MThjMDM5OTYwNDE2NzUyZDQ2M2E5OTYwODczNzU1OTIxYjBlYTM" alt="" />

                  
                  </Flex>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover" offset={0} boundary="0">
            <PopoverTrigger>
              <Button
                bg
                color="white"
                borderRadius={0}
                _hover={{
                  background: "#e42529",
                  color: "white",
                }}
                fontSize="13px"
              >
                KITCHEN APPLIANCES
                <Icon as={ChevronDownIcon} />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="1300px" mr="27px" ml="27px" border="0">
            <Flex  bg="purple.900" color="white" fontSize="13px" pl="34px" py="12px" gap="40px">
                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs'><Link>Smartphones</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Wearable Technology</Link></Heading>
                      <List spacing="8px">
                        <ListItem><Link>Apple Watches Price Drop</Link></ListItem>
                        <ListItem><Link>Smartwatch @ Rs.999</Link></ListItem> 
                        <ListItem> <Link>Apple Essentials</Link> </ListItem>

                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Accessories</Link></Heading>
                      <List spacing="8px">
                      <ListItem> <Link>Tablet Accessories</Link></ListItem>
                      <ListItem> <Link>Mobile Accessories</Link></ListItem>
                      <ListItem><Link>Mobile Grips & Stands</Link></ListItem>
                      <ListItem><Link>Car Mobile Holders</Link></ListItem>
                      <ListItem> <Link>Memory Cards</Link></ListItem>

                      </List>

                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs'><Link>Headphones & Headsets</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Tablets & eReaders</Link></Heading>
                      <List spacing="8px">
                        <ListItem><Link>Every day use Tablets below 15000</Link></ListItem>
                        <ListItem><Link>Premium Tablets, Above 15001</Link></ListItem> 
                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Power Banks</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>eSlates</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>All Learning Robots</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <img src="https://www.reliancedigital.in/medias/One-Plus-10R-Mobile-Phone-492850198-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDAwOHxpbWFnZS9qcGVnfGltYWdlcy9oMWUvaDk5Lzk4NzM5Nzg1MjM2NzguanBnfDM3N2IxOGQ0MmQ2YTZjMmUyZDcwYWRlNmI2MThjMDM5OTYwNDE2NzUyZDQ2M2E5OTYwODczNzU1OTIxYjBlYTM" alt="" />

                  
                  </Flex>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover" offset={0} boundary="0">
            <PopoverTrigger>
              <Button
                bg
                color="white"
                borderRadius={0}
                _hover={{
                  background: "#e42529",
                  color: "white",
                }}
                fontSize="13px"
              >
                PERSONAL CARE
                <Icon as={ChevronDownIcon} />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="1300px" mr="27px" ml="27px" border="0">
            <Flex  bg="purple.900" color="white" fontSize="13px" pl="34px" py="12px" gap="40px">
                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs'><Link>Smartphones</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Wearable Technology</Link></Heading>
                      <List spacing="8px">
                        <ListItem><Link>Apple Watches Price Drop</Link></ListItem>
                        <ListItem><Link>Smartwatch @ Rs.999</Link></ListItem> 
                        <ListItem> <Link>Apple Essentials</Link> </ListItem>

                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Accessories</Link></Heading>
                      <List spacing="8px">
                      <ListItem> <Link>Tablet Accessories</Link></ListItem>
                      <ListItem> <Link>Mobile Accessories</Link></ListItem>
                      <ListItem><Link>Mobile Grips & Stands</Link></ListItem>
                      <ListItem><Link>Car Mobile Holders</Link></ListItem>
                      <ListItem> <Link>Memory Cards</Link></ListItem>

                      </List>

                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs'><Link>Headphones & Headsets</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Tablets & eReaders</Link></Heading>
                      <List spacing="8px">
                        <ListItem><Link>Every day use Tablets below 15000</Link></ListItem>
                        <ListItem><Link>Premium Tablets, Above 15001</Link></ListItem> 
                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Power Banks</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>eSlates</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>All Learning Robots</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <img src="https://www.reliancedigital.in/medias/One-Plus-10R-Mobile-Phone-492850198-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDAwOHxpbWFnZS9qcGVnfGltYWdlcy9oMWUvaDk5Lzk4NzM5Nzg1MjM2NzguanBnfDM3N2IxOGQ0MmQ2YTZjMmUyZDcwYWRlNmI2MThjMDM5OTYwNDE2NzUyZDQ2M2E5OTYwODczNzU1OTIxYjBlYTM" alt="" />

                  
                  </Flex>
            </PopoverContent>
          </Popover>

          <Popover trigger="hover" offset={0} boundary="0">
            <PopoverTrigger>
              <Button
                bg
                color="white"
                borderRadius={0}
                _hover={{
                  background: "#e42529",
                  color: "white",
                }}
                fontSize="13px"
              >
                ACCESSORIES
                <Icon as={ChevronDownIcon} />
              </Button>
            </PopoverTrigger>
            <PopoverContent w="1300px" mr="27px" ml="27px" border="0">
            <Flex  bg="purple.900" color="white" fontSize="13px" pl="34px" py="12px" gap="40px">
                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs'><Link>Smartphones</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Wearable Technology</Link></Heading>
                      <List spacing="8px">
                        <ListItem><Link>Apple Watches Price Drop</Link></ListItem>
                        <ListItem><Link>Smartwatch @ Rs.999</Link></ListItem> 
                        <ListItem> <Link>Apple Essentials</Link> </ListItem>

                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Accessories</Link></Heading>
                      <List spacing="8px">
                      <ListItem> <Link>Tablet Accessories</Link></ListItem>
                      <ListItem> <Link>Mobile Accessories</Link></ListItem>
                      <ListItem><Link>Mobile Grips & Stands</Link></ListItem>
                      <ListItem><Link>Car Mobile Holders</Link></ListItem>
                      <ListItem> <Link>Memory Cards</Link></ListItem>

                      </List>

                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      <Box>
                      <Heading as='h6' size='xs'><Link>Headphones & Headsets</Link></Heading>
                      </Box>
                      
                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Tablets & eReaders</Link></Heading>
                      <List spacing="8px">
                        <ListItem><Link>Every day use Tablets below 15000</Link></ListItem>
                        <ListItem><Link>Premium Tablets, Above 15001</Link></ListItem> 
                      </List>

                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>Power Banks</Link></Heading>
                      </Box>

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>eSlates</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <List spacing="18px">
                      

                      <Box>
                      <Heading as='h6' size='xs' pb="8px"><Link>All Learning Robots</Link></Heading>
                      </Box>
                      
                      
                    </List>

                    <img src="https://www.reliancedigital.in/medias/One-Plus-10R-Mobile-Phone-492850198-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDAwOHxpbWFnZS9qcGVnfGltYWdlcy9oMWUvaDk5Lzk4NzM5Nzg1MjM2NzguanBnfDM3N2IxOGQ0MmQ2YTZjMmUyZDcwYWRlNmI2MThjMDM5OTYwNDE2NzUyZDQ2M2E5OTYwODczNzU1OTIxYjBlYTM" alt="" />

                  
                  </Flex>
            </PopoverContent>
          </Popover>
        </Flex>

        
      </Box>
    </div>
  );
}

export default Navbar;
