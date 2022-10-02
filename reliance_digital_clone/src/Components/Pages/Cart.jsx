import React from "react";
import { CartContext } from "../Context/CartContext/CartContextProvider";
import {checkout, removeFromCart} from "../Context/CartContext/action"
import { useContext } from "react";
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Center, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";




const Cart = () => {
  const {state, dispatch} = useContext(CartContext)
  const {isOpen, onOpen, onClose} = useDisclosure();
  const cancelRef = React.useRef();

  const handleCheckout =()=>{
    dispatch(checkout());
    onClose();
  }

  return (
    <Box>
      <TableContainer mt={{base:20, sm:20,md:28,lg:32}}>
        <Table varient="simple" colorScheme="gray" size={{base:"sm", sm:"sm",md:"md",lg:"lg"}}>
          <TableCaption>No Exchange | No Refund</TableCaption>
          <Thead>
            <Tr>
              <Th fontsize={{base:"xs", md:"md"}}>Product</Th>
              <Th fontsize={{base:"xs", md:"md"}}>Price (INR)</Th>
              <Th fontsize={{base:"xs", md:"md"}}>Remove From Cart</Th>
            </Tr>
          </Thead>

          <Tbody>
            {state.map((cartItem)=>(
              <Tr key={cartItem.id}>
                <Td fontsize={{base:"xs", md:"md"}}>{cartItem.title}</Td>
                <Td fontsize={{base:"xs", md:"md"}}>{cartItem.offerPrice}</Td>
                <Td fontsize={{base:"xs", md:"md"}}><Button onClick={()=>dispatch(removeFromCart(cartItem.id))}>Remove From Cart</Button></Td>
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
        <Button variant="outline" colorScheme="purple" onClick={onOpen}>
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
  )
};

export default Cart;
