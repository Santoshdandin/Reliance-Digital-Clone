import React from "react";
import { CartContext } from "../Context/CartContext/CartContextProvider";
import {checkout, removeFromCart} from "../Context/CartContext/action"
import { useContext } from "react";
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Center, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useDisclosure,
  Stack,
  Skeleton,
  Container,
  Alert,
  AlertIcon,
  AlertDescription,
  Grid,
  GridItem,
  Flex,
  Text,
  Image,
  
  Badge,
  useToast, } from "@chakra-ui/react";
  import { StarIcon } from "@chakra-ui/icons";




const Cart = () => {
  const {state, dispatch} = useContext(CartContext)
  const {isOpen, onOpen, onClose} = useDisclosure();
  const cancelRef = React.useRef();

  const handleCheckout =()=>{
    dispatch(checkout());
    onClose();
  }

  return (


   
    <Box display="flex">
      <Box m="30px">
      <Container maxW={{base:"full", md:"container.xl"}} p={{base:2, lg:0}}>
    <Grid  templateColumns={{base:"repeat(1,1fr)", md:"repeat(2,1fr)", lg:"repeat(2,1fr)"}} gap={4}>

      {state.map((watch)=>(
        <GridItem key={watch.id}>

<Box  bg="#fff" boxShadow="md" _hover={{
                    boxShadow:"xl",
                  }}  border="1px" borderColor="#e5e5e5" pt="22px" px="12px">
                    
                <Box  w="240px" h="215px" justifySelf="center">
                <Image cursor="pointer" w="180px" _hover={{
                    w: "195px",
                  }} src={watch.image} alt={watch.imageAlt} />

                </Box>
                
                <Box
                color="#003380"
                  mt="1"
                  fontWeight="400"
                  as="p"
                  fontSize="15px"
                  lineHeight="tight"
                  noOfLines={2}
                  _hover={{
                    color: "red",
                  }}
                  cursor="pointer"
                  mb="15px"
                >
                 {watch.title}
                </Box>

                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={
                          i < watch.rating ? "rgb(255, 164, 28)" : "gray.300"
                        }
                      />
                    ))}
                  <Box
                    as="span"
                    ml="2"
                    color="rgb(0, 51, 128)"
                    fontSize="sm"
                    fontWeight="500"
                  >
                    ( {watch.reviewCount} 30 reviews)
                  </Box>
                </Box>

                <Box display="flex" justifyContent="space-between" color="#666" fontSize="14px" >
                  <Box>
                    <Box
                      as="span"
                      color="black"
                      fontSize="15px"
                      fontWeight="bold"
                    >
                      ₹{watch.offerPrice}.00
                    </Box>
                  </Box>

                  <Box>
                    <Box as="span" as="s">
                      ₹{watch.mrp}.00
                    </Box>
                  </Box>

                  <Box>
                    <Box as="span" >
                      {watch.save}
                    </Box>
                  </Box>

                  

                  
                </Box>

                <Badge
                    borderRadius="full"
                    px="2"
                    colorScheme="green"
                    border="1px"
                    fontSize="10px"
                  >
                    OFFERS AVAILABLE
                  </Badge>

                  <Box display="flex" gap="5px" my="10px" justifyContent="center">

                  <Button colorScheme="gray" varient="outline"  onClick={()=>dispatch(removeFromCart(watch.id))}>
                    Remove
                  </Button>

                  

                  </Box>

                

              </Box>
        </GridItem>
      ))}
    </Grid>

  </Container>
      
      </Box>
      <Box >
      
      <TableContainer mt={{base:20, sm:20,md:28,lg:32}}>
        <Table varient="simple" colorScheme="gray" size={{base:"sm", sm:"sm",md:"md",lg:"lg"}}>
          <TableCaption>No Exchange | No Refund</TableCaption>
          <Thead>
            <Tr>
              <Th fontsize={{base:"xs", md:"md"}}>Product</Th>
              <Th fontsize={{base:"xs", md:"md"}}>Price (INR)</Th>
              
            </Tr>
          </Thead>

          <Tbody>
            {state.map((cartItem)=>(
              <Tr key={cartItem.id}>
                <Td fontsize={{base:"xs", md:"md"}}>{cartItem.title}</Td>
                <Td fontsize={{base:"xs", md:"md"}}>{cartItem.offerPrice}</Td>
               
              </Tr>
            ))}

          </Tbody>

          <Tfoot>
            <Tr>
              <Th fontsize={{base:"xs", md:"md"}}>Final Price</Th>
              <Th fontsize={{base:"xs", md:"md"}}>{Math.round(state.reduce((a,c)=>a+c.offerPrice,0))}</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
      <Center mt={{base:4, md:8}} m="30px">
        <Button  colorScheme="red" onClick={onOpen}>
          Place Order

        </Button>

        <AlertDialog isOpen={isOpen}  leastDestructiveRef={cancelRef} onClose={onClose}>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Place Order
              </AlertDialogHeader>
              <AlertDialogBody>
                Are You sure you want to place this order?
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={handleCheckout} ml={3}>Yes</Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>

        </AlertDialog>

      </Center>

      </Box>


    </Box>
  )
};

export default Cart;
