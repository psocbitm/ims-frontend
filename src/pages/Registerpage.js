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

const initialFormData = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  dob: "",
  phone: "",
  street: "",
  city: "",
  pincode: "",
};

function RegisterPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistration = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8085/ims/api/register",
        {
          email: formData.email,
          fname: formData.firstName,
          lname: formData.lastName,
          password: formData.password,
          dob: formData.dob,
          phoneNo: formData.phone,
          address: {
            street: formData.street,
            city: formData.city,
            pincode: formData.pincode,
          },
        }
      );

      if (response.data === "Registration successful") {
        setIsError(false);
        alert("Registration successful! You can now log in.");
        navigate("/login"); // Redirect to the login page after successful registration
      } else {
        setIsError(true);
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setIsError(true);
      alert("An error occurred during registration. Please try again.");
    }
  };

  return (
    <Box p={4}>
      <FormControl isInvalid={isError}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
        />
        <FormLabel htmlFor="password" mt={4}>
          Password
        </FormLabel>
        <Input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter your password"
        />
        <FormLabel htmlFor="firstName" mt={4}>
          First Name
        </FormLabel>
        <Input
          id="firstName"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Enter your first name"
        />
        <FormLabel htmlFor="lastName" mt={4}>
          Last Name
        </FormLabel>
        <Input
          id="lastName"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Enter your last name"
        />
        <FormLabel htmlFor="dob" mt={4}>
          Date of Birth
        </FormLabel>
        <Input
          id="dob"
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
        />
        <FormLabel htmlFor="phone" mt={4}>
          Phone Number
        </FormLabel>
        <Input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Enter your phone number"
        />
        <FormLabel htmlFor="street" mt={4}>
          Street Address
        </FormLabel>
        <Input
          id="street"
          type="text"
          name="street"
          value={formData.street}
          onChange={handleInputChange}
          placeholder="Enter your street address"
        />
        <FormLabel htmlFor="city" mt={4}>
          City
        </FormLabel>
        <Input
          id="city"
          type="text"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          placeholder="Enter your city"
        />
        <FormLabel htmlFor="pincode" mt={4}>
          Pincode
        </FormLabel>
        <Input
          id="pincode"
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleInputChange}
          placeholder="Enter your pincode"
        />
        {isError && (
          <FormErrorMessage>
            Registration failed. Please try again.
          </FormErrorMessage>
        )}
        <Button mt={4} colorScheme="teal" onClick={handleRegistration}>
          Register
        </Button>
      </FormControl>
    </Box>
  );
}

export default RegisterPage;
