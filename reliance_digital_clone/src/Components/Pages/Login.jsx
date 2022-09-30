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
  AlertIcon,
  AlertDescription,
  Container,
  VStack,
 Image,
  Alert,
  Center,
} from "@chakra-ui/react";



function Login() {
  const [nput, setNput] = useState([]);

  // const handleInputChange = (e) => setInput(e.target.value);

  // const isError = input === "";

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
          <FormLabel>Email adress</FormLabel>
          <Input name="email" type="email"  />
          <FormHelperText>We'll never share your email.</FormHelperText>

        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input name="password" type="password"   />
          
          
        </FormControl>

        <FormControl>
          <Center>
            <Button w="full"  _hover={{
                    bg: "red.600",
                  }} variant="outline" color="white" bg="rgb(228, 37, 41)" mt={4}   >PROCEED</Button>
          </Center>

        </FormControl>

      </VStack>

    </Box>
    </Box>
    
    </div>
    );
}

export default Login;
