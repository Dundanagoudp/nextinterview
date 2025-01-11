import React from 'react';
import {
  Container,
  FormSection,
  Logo,
  Heading,
  Form,
  Input,
  Button,
  AlternativeLogin,
  Footer,
  Signupage,
} from '../styles/SignUp.styles';
import { FaGoogle, FaLinkedin, FaMobileAlt } from 'react-icons/fa';
import logo from '../assets/logo.png';
import signup from '../assets/signup.png';

const SignUp = () => {
  return (
    <Container>
      <FormSection>
        <Logo>
          <img src={logo} alt="Next Interview Logo" />
        </Logo>
        <Heading>Welcome to Next Interview</Heading>
        <Form>
          <Input>
            <label>Email ID</label>
            <input type="email" placeholder="Enter your email" />
          </Input>
          <Input>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </Input>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1rem',
            }}
          >
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="/forgot-password" style={{ color: '#007bff' }}>
              Forgot Password
            </a>
          </div>
          <Button>Log In</Button>
        </Form>
        <AlternativeLogin>
          <button>
            <FaMobileAlt /> Log in with Mobile
          </button>
          <button>
            <FaGoogle /> Log in with Google
          </button>
          <button>
            <FaLinkedin /> Log in with LinkedIn
          </button>
        </AlternativeLogin>
        <Footer>
          By signing in, I agree to Next Interview's{' '}
          <a href="/privacy-policy">Privacy Policy</a> and{' '}
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
