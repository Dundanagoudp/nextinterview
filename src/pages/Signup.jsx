// React Component
import React, { useState } from 'react';
import {
  Container,
  Header,
  FormSection,
  Logo,
  Heading,
  Form,
  Input,
  Button,
  AlternativeLogin,
  LinkedInButton,
  Footer,
  Signupage,
} from '../styles/SignUp.styles';
import { FaGoogle, FaLinkedin, FaMobileAlt, FaEye, FaEyeSlash } from 'react-icons/fa';
import logo from '../assets/logo.png';
import signup from '../assets/signup.png';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container>
      <Header>
        <Logo>
          <img src={logo} alt="Next Interview Logo" />
        </Logo>
      </Header>
      <FormSection>
        <Heading>Welcome to Next Interview</Heading>
        <Form onSubmit={handleFormSubmit}>
          <Input>
            <label>Email ID</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
          </Input>
          <Input>
            <label>Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state
              />
              <span
                onClick={togglePasswordVisibility}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </Input>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem',
            }}
          >
            <label style={{ fontSize: '0.9rem' }}>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="/forgot-password" style={{ color: '#007bff', fontSize: '0.9rem' }}>
              Forgot Password
            </a>
          </div>
          <Button type="submit">Log In</Button>
          <AlternativeLogin>
            <button>
              <FaMobileAlt /> Log in with Mobile
            </button>
            <button>
              <FaGoogle /> Log in with Google
            </button>
          </AlternativeLogin>
          <LinkedInButton>
          <button>      
          <FaLinkedin /> Log in with LinkedIn
          </button>
          </LinkedInButton>

        </Form>
        <Footer>
          By signing in, I agree to Next Interview's{' '}
          <a href="/privacy-policy">Privacy Policy</a>
          <br /> and{' '}
          <a href="/terms">Terms of Service</a>.
        </Footer>
      </FormSection>
      <Signupage>
        <img src={signup} alt="Sign Up Illustration" />
      </Signupage>
    </Container>
  );
};

export default SignUp;
