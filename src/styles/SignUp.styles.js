import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: white;
  align-items: center;
  justify-content: center;
`;

export const FormSection = styled.div`
  flex: 1;
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 600px; /* Adjust for better responsiveness */
`;

export const Signupage = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9fafa;

  img {
    width: 90%;
    max-width: 500px;
    height: auto;
  }
`;

export const Logo = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;

  img {
    height: 50px; /* Match the height in the reference */
  }
`;

export const Heading = styled.h2`
  margin-bottom: 1rem;
  color: #333;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: auto;
`;

export const Input = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #555;
    font-size: 1rem;
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    color: #333;
  }
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.8rem;
  font-size: 1.2rem; /* Larger font for the primary button */
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

export const AlternativeLogin = styled.div`
  margin-top: 2rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 1rem;
    padding: 0.8rem;
    border: 1px solid #ccc;
    background: white;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background: #f4f4f4;
    }

    svg {
      margin-right: 0.5rem;
      font-size: 1.2rem;
    }
  }
`;

export const Footer = styled.p`
  margin-top: 2rem;
  font-size: 0.85rem;
  color: #666;
  text-align: center;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
