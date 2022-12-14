import React from "react";
import { useState } from "react";
import axios from "axios"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Box,
  Input,
  
  Container,
  VStack,
 Image,
  
  Center,
  Link,
  useToast,
  toast,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  
} from "@chakra-ui/react";

function Signup() {

  const toast = useToast()
  const [nput, setNput] = useState([]);

  // const handleInputChange = (e) => setInput(e.target.value);

  // const isError = input === "";

  const alertSuccess = ()=>{
    return (
      
alert("Registration Success")
    )
    
  }

  const getData = ()=>{
    return (
      axios.get("https://mock-server-api.onrender.com/smartWatches").then((res)=>setNput(res.data))
      
    )
  }

  getData();
  return (
    <div>

  
    <Box display="flex" justifyContent="flex-end" mr="20px">
    
    
    
        <Box width={{base:"xs", sm:"xs", md:"xl", lg:"lg"}} >
    
          <VStack  width="full" boxShadow="xl"  py={{base:4, sm:4, md:4, lg:6 }} my={{base:4, sm:4, md:8, lg:10 }} px={{base:1, sm:1, md:4, lg:6 }}>

          <FormControl>
              <FormLabel>Name</FormLabel>
              <Input name="name" type="text" placeholder="Enter Name"  />
              
    
            </FormControl>

            <FormControl>
              <FormLabel>Mobile</FormLabel>
              <Input name="mobile" type="number" placeholder="Enter Mobile number"  />
              
    
            </FormControl>
    
            <FormControl>
              <FormLabel>Email adress</FormLabel>
              <Input name="email" type="email" placeholder="Enter Email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
    
            </FormControl>
    
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input name="password" type="password"   />
              
              
            </FormControl>
    
            <FormControl>
              <Center>
                <Button onClick={alertSuccess}
     
           w="full"  _hover={{
                        bg: "red.600",
                      }} variant="outline" color="white" bg="rgb(228, 37, 41)" mt={4}><Link href="/login" textDecoration="none" >Register</Link></Button>
              </Center>
    
            </FormControl>
    
            <Box>already have account? <Link href="/login" textDecoration="underline" color="blue" fontSize="16px" fontWeight="semibold">Signin</Link> </Box>
    
          </VStack>
    
        </Box>
        </Box>
        
        </div>
  )
}

export default Signup