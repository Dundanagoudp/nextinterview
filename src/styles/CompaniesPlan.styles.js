import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: rgb(255, 255, 255);
  position: relative;
  height: 100vh; /* Full height to center the form */
`;

export const Header = styled.header`
  position: absolute;
  top: 15px;
  left: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const Logo = styled.div`
  img {
    height: 50px;
    margin-left:-550px;
  }

  @media (max-width: 768px) {
    img {
      height: 70px;
    }
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin: 20px 0;
  font-size: 1.8rem;
  color: #333;
`;

export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* To center form */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 500px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const CompanyIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
`;

export const Icon = styled.div`
  cursor: pointer;
  border: 2px solid transparent;
  padding: 5px;
  border-radius: 5px;
  transition: all 0.3s ease;

  ${(props) =>
    props.selected &&
    css`
      border-color: #008cba;
      background-color:rgb(255, 255, 255);
    `}

  img {
    width: 50px;
    height: auto;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${(props) => (props.secondary ? '#f5f5f5' : '#008cba')};
  color: ${(props) => (props.secondary ? '#333' : '#fff')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${(props) => (props.secondary ? '#e0e0e0' : '#005f73')};
  }
`;

export const AddAnother = styled.div`
  text-align: center;
  margin-top: 10px;
  color: #008cba;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.9rem;
`;
