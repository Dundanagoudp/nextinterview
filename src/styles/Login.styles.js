import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
  position: relative;

  @media (max-width: 768px) {
    height: auto; /* Allow for scrolling on smaller screens */
    padding: 20px;
  }
`;

export const LogoSection = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;

  img {
    height: 50px;
  }

  @media (max-width: 768px) {
    top: 15px;
    left: 15px;
    img {
      height: 40px;
    }
  }
`;

export const Logo = styled.div`
  img {
    height: 50px;
  }
`;

export const BackIcon = styled.div`
  position: absolute;
  top: 230px; /* Adjust to place it near the top on mobile */
  left: 635px;
  cursor: pointer;
  font-size: 24px;
  color: #000;

  @media (max-width: 768px) {
    top: 380px;
    left: 45px;
    font-size: 24px;
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 400px;
  padding: 0;

  @media (max-width: 768px) {
  margin-top: 400px;
    max-width: 100%;
    padding: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #000;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 18px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border 0.3s;

  &:focus {
    border-color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
  text-align: left;
  width: 100%;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 12px; /* Smaller text for mobile */
    margin-bottom: 10px; /* Add more spacing for mobile */
  }
`;



export const Button = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #b0dfe5;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a0cde5;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;
