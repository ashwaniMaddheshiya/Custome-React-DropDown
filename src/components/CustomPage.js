import React, { useState } from 'react';
import CustomSelect from './CustomSelect';
import './CustomPage.css';
import Button from './UI/Button';
import { useNavigate } from 'react-router-dom';

const CustomPage = (props) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const navigate = useNavigate();

  

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedState("");
    
  };
  
  const handleStateChange = (state) => {
    setSelectedState(state);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onInput({selectedCountry,selectedState})
    navigate("/submit");

  }

  const countries = ['USA', 'India', 'Mexico'];
  const usaStates = ['California', 'Texas', 'New York'];
  const indianStates = ['Himachal Pradesh', 'Maharashtra', 'Assam'];
  const mexicoStates = ['Jalisco', 'Veracruz', 'Nuevo León'];
  const statesByCountry = {
    USA: usaStates,
    India: indianStates,
    Mexico: mexicoStates,
  };
  const states = statesByCountry[selectedCountry] || [];

  return (
    <div className='container'>
      <CustomSelect options={countries} onChange={handleCountryChange} title="Select the Country" />
      <br />
      {selectedCountry && (
        <CustomSelect options={states} onChange={handleStateChange} title="Select the State" />
      )}

      <Button onClick={handleSubmit} disabled={!selectedCountry || !selectedState}>Submit</Button>
    </div>
  );
};

export default CustomPage;

