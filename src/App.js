import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CustomPage from "./components/CustomPage";
import SubmissionPage from "./components/SubmissionPage";

const App = () => {
  const [countryInput, setCountryInput] = useState();
  const [stateInput, setStateInput] = useState();

  const inputHandler = (values) => {
    console.log(values);
    setCountryInput(values.selectedCountry);
    setStateInput(values.selectedState);
  };
  return (
    <>
      <Routes>
        <Route exact path="/" element={<CustomPage onInput={inputHandler} />} />
        
        <Route
          exact
          path="/submit"
          element={<SubmissionPage country={countryInput} state={stateInput} />}
        />
      </Routes>
    </>
  );
};

export default App;
