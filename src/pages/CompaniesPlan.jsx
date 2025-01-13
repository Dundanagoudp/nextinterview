import React from 'react';
import {
  Container,
  Header,
  BackButton,
  Form,
  FormField,
  Label,
  Input,
  Select,
  CompanyIcons,
  Icon,
  Button,
  AddAnother,
  Logo,
} from '../styles/CompaniesPlan.styles';
import logo from '../assets/logo.png';

const CompaniesPlan = () => {
  return (
    <Container>

    <Header>
        <Logo>
          <img src={logo} alt="Next Interview Logo" />
        </Logo>
      </Header>

      <Header>
        <h2>Tell us about your interview schedule</h2>
      </Header>
      <Form>
        <FormField>
          <Label>Company Name</Label>
          <Select>
            <option value="">Select Company name</option>
          </Select>
        </FormField>

        <CompanyIcons>
          <Icon>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" />
          </Icon>
          <Icon>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/Flipkart_logo.svg" alt="Flipkart" />
          </Icon>
          <Icon>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
          </Icon>
        </CompanyIcons>

        <FormField>
          <Label>Date of interview (Optional)</Label>
          <Input type="date" />
        </FormField>

        <FormField>
          <Label>Role type</Label>
          <Select>
            <option value="">Select Role</option>
          </Select>
        </FormField>

        <FormField>
          <Label>Round type</Label>
          <Select>
            <option value="">Select Role</option>
          </Select>
        </FormField>

        <Button>Next</Button>
        <Button secondary>Not scheduled yet</Button>

        <AddAnother>Add Another Company</AddAnother>
      </Form>
    </Container>
  );
};

export default CompaniesPlan;
