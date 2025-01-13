import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
`;

export const Header = styled.header`
  position: absolute;
  top: 15px;
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Logo = styled.div`
  img {
    height: 50px;
  }

  @media (max-width: 768px) {
    img {
      height: 70px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
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
  gap: 10px;
`;

export const Icon = styled.div`
  cursor: pointer;

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
`;
