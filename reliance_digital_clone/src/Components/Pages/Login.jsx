import React from "react";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Input,
  Box,
} from "@chakra-ui/react";

function Login() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <Box display="flex"  w="500px" alignItems="flex-end">
      <FormControl isInvalid={isError}>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={input} onChange={handleInputChange} />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
    </Box>
  );
}

export default Login;
