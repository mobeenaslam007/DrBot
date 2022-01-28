import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../Components/FormContainer";
import ResultScreen from "./ResultScreen";
const SymptomsScreen = () => {
  const [name, setName] = useState("");
  const [symptom, setSymptom] = useState("");
  const [days, setDays] = useState(null);
  const [symptomsPredicted, setSymptomsPredicted] = useState(null);
  const [symptomsObj, setSymptomsObj] = useState(null);
  const [diseaseDetails, setDiseaseDetails] = useState(null);
  const [showFinalResult, setShowFinalResult] = useState(false);
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate("/");
  };

  const symptomDetailsRequest = async (data) => {
    console.log(data);
    const requestOptions = {
      headers: { "Content-Type": "application/json" },
      body: data,
    };
    const response = await axios.post(
      "http://localhost:8000/symptomdetails",
      data,
      requestOptions
    );
    console.log(response.data);
    setSymptomsPredicted(response.data);
    const symptoms = {};
    // setSymptomsList(response.data["symptomsList"]);
    for (const item of response.data["symptomsList"]) symptoms[item] = "no";
    setSymptomsObj(symptoms);
  };

  const predictDiseaseRequest = async (data) => {
    console.log(data);
    const requestOptions = {
      headers: { "Content-Type": "application/json" },
      body: data,
    };
    const response = await axios.post(
      "http://localhost:8000/diseasedetails",
      data,
      requestOptions
    );

    if (response.status === 200) setShowFinalResult(true);

    console.log(response.data);
    setDiseaseDetails(response.data);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      symptom: symptom,
      days: days,
    };

    try {
      if (symptomsObj)
        predictDiseaseRequest({ basicData: data, symptomDetails: symptomsObj });
      else symptomDetailsRequest(data);
    } catch {
      alert("Error submitting");
    }
  };

  useEffect(() => {
    // console.log(symptomsList);
    // console.log(symptomsPredicted);
    console.log(symptomsObj);
  }, [symptomsObj]);

  const changeSymptomState = (key, value) => {
    setSymptomsObj({
      ...symptomsObj,
      [key]: value,
    });
  };

  const closeFinalResultModal = () => {
    setShowFinalResult(false);
    setSymptomsObj(null);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Button variant="primary" onClick={goBackHandler} className="mt-3 ms-3">
        {"<"} Back
      </Button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FormContainer>
          <Form style={{ color: "white" }} onSubmit={submitHandler}>
            <Form.Group>
              <Form.Label>Name: </Form.Label>
              <Form.Control
                required
                type="name"
                placeholder="Enter your name"
                value={name}
                style={{ borderRadius: 25 }}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>Symptom:</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter the symptom you are experiencing"
                value={symptom}
                style={{ borderRadius: 25 }}
                onChange={(e) => setSymptom(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>Days:</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="From how many days?"
                value={days}
                style={{ borderRadius: 25 }}
                onChange={(e) => setDays(e.target.value)}
              ></Form.Control>
            </Form.Group>
            {symptomsObj &&
              Object.keys(symptomsObj).map((item, index) => (
                <div>
                  <Form.Group className="mt-2">
                    <Form.Label>{item} ?</Form.Label>
                    <Form.Select
                      style={{ borderRadius: 25 }}
                      onChange={(e) => changeSymptomState(item, e.target.value)}
                    >
                      <option value={symptomsObj[item]}>
                        no
                      </option>
                      <option value="yes">yes</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              ))}

            <div class="col-md-12 text-center">
              <Button type="submit" variant="primary" className="mt-3">
                Submit
              </Button>
            </div>
          </Form>
        </FormContainer>
      </div>
      {showFinalResult && diseaseDetails ? (
        <ResultScreen
          closeFinalResultModal={closeFinalResultModal}
          diseaseDetails={diseaseDetails}
        />
      ) : null}
    </div>
  );
};

export default SymptomsScreen;
