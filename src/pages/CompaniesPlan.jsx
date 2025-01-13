import React, { useState } from 'react';
import {
  Container,
  Header,
  Logo,
  Title,
  FormSection,
  Form,
  FormField,
  Label,
  Input,
  Select,
  CompanyIcons,
  Icon,
  Button,
  AddAnother,
  BackIcon,
} from '../styles/CompaniesPlan.styles';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';
import flip from '../assets/flip.png';

const CompaniesPlan = () => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const navigate = useNavigate();

  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
  };

  const handleGoBack = () => {
    navigate("/question4");
  };

  return (
    <Container>
      {/* Header with Logo at top-left */}
      <Header>
        <Logo>
          <img src={logo} alt="Next Interview Logo" />
        </Logo>
      </Header>

      {/* Back Icon positioned at the top of the form */}
      <BackIcon onClick={handleGoBack}>
        <FaArrowLeft />
      </BackIcon>

      {/* Form Section */}
      <FormSection>
        <Title>Tell us about your interview  schedule</Title>
        <Form>
          <FormField>
            <Label>Company Name</Label>
            <Select>
              <option value="">Select Company name</option>
              <option value="Amazon">Amazon</option>
              <option value="Flipkart">Flipkart</option>
              <option value="Google">Google</option>
            </Select>
          </FormField>

          <FormField>
  <Label>Select from here</Label>
  <CompanyIcons>
    <Icon selected={selectedCompany === 'Amazon'} onClick={() => handleCompanySelect('Amazon')}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" />
    </Icon>
    <Icon selected={selectedCompany === 'Flipkart'} onClick={() => handleCompanySelect('Flipkart')}>
      <img src={flip} alt="Flipkart" />
    </Icon>
    <Icon selected={selectedCompany === 'Google'} onClick={() => handleCompanySelect('Google')}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
    </Icon>
  </CompanyIcons>
</FormField>


          <FormField>
            <Label>Date of interview (Optional)</Label>
            <Input type="date" />
          </FormField>

          <FormField>
            <Label>Role type</Label>
            <Select>
              <option value="">Select Role</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
            </Select>
          </FormField>

          <FormField>
            <Label>Round type</Label>
            <Select>
              <option value="">Select Round</option>
              <option value="Technical">Technical</option>
              <option value="HR">HR</option>
            </Select>
          </FormField>

          <Button>Next</Button>
          <Button secondary>Not scheduled yet</Button>

          <AddAnother>Add Another Company</AddAnother>
        </Form>
      </FormSection>
    </Container>
  );
};

export default CompaniesPlan;
