import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 
import {
  Container,
  LogoSection,
  BackIcon,
  FormSection,
  Title,
  Subtitle,
  InputContainer,
  Input,
  Button,
  Logo,
  Label,  // Import the Label component here
} from '../styles/Login.styles';
import logo from '../assets/logo.png';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const navigate = useNavigate(); 

  const handleSendOTP = () => {
    if (mobileNumber.trim().length === 10) {
      alert("OTP Sent!");
      // Add API call for sending OTP
    } else {
      alert("Please enter a valid 10-digit mobile number.");
    }
  };

  const handleGoBack = () => {
    navigate("/"); 
  };

  return (
    <Container>
      <LogoSection>
        <img src={logo} alt="Next Interview Logo" />
      </LogoSection>

      <BackIcon onClick={handleGoBack}>
        <FaArrowLeft />
      </BackIcon>

      <FormSection>
        <Title>Login with Mobile number</Title>
        <Subtitle>OTP will be sent to your mobile number.</Subtitle>
        <InputContainer>
          <Label>Mobile Number</Label> {/* Use the styled Label component */}
          <Input
            type="tel"
            value={mobileNumber}
            placeholder="Enter your Mobile Number"
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </InputContainer>
        <Button onClick={handleSendOTP}>Send OTP</Button>
      </FormSection>
    </Container>
  );
};

export default Login;
