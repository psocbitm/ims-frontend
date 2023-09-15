import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8085/ims/api/login", {
        email: email,
        password: password,
      });

      if (response.data === true) {
        setIsError(false);
        navigate("/secured");
      } else {
        setIsError(true);
        alert("Login failed. Please check your email and password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setIsError(true);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <Box p={4}>
      <FormControl isInvalid={isError}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          autoComplete="username" 
        />
        <FormLabel htmlFor="password" mt={4}>
          Password
        </FormLabel>
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter your password"
          autoComplete="current-password" 
        />
        {isError && (
          <FormErrorMessage>
            Email and password combination is incorrect.
          </FormErrorMessage>
        )}
        <Button mt={4} colorScheme="teal" onClick={handleLogin}>
          Login
        </Button>
      </FormControl>
    </Box>
  );
}

export default LoginPage;
