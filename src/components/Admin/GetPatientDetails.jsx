import React, { useState } from "react";
import AddPatient from "./AddPatient";

function GetPatientDetails({ contract }) {
  const [patientAddress, setPatientAddress] = useState("");
  const [patientDetails, setPatientDetails] = useState({
    id: "",
    name: "",
    houseAddr: "",
    cityAddr: "",
    stateAddr: "",
    postalAddr: "",
    countryAddr: "",
    phone: "",
    email: "",
    runningDisease1: "",
    runningDisease2: "",
    symptoms: "",
    medication: "",
    additionalInfo: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleGetPatientDetails = async () => {
    try {
      const result = await contract.patients(patientAddress);

      if (result) {
        const formattedDetails = {
          id: result[0],
          name: result[1],
          houseAddr: result[2],
          cityAddr: result[3],
          stateAddr: result[4],
          postalAddr: result[5],
          countryAddr: result[6],
          phone: result[7],
          email: result[8],
          runningDisease1: result[9],
          runningDisease2: result[10],
          symptoms: result[11],
          medication: result[12],
          additionalInfo: result[13],
        };
        setPatientDetails(formattedDetails);
        setErrorMessage("");
      } else {
        setPatientDetails({
          id: "",
          name: "",
          houseAddr: "",
          cityAddr: "",
          stateAddr: "",
          postalAddr: "",
          countryAddr: "",
          phone: "",
          email: "",
          runningDisease1: "",
          runningDisease2: "",
          symptoms: "",
          medication: "",
          additionalInfo: "",
        });
        setErrorMessage("Patient not found or an error occurred.");
      }
    } catch (error) {
      setPatientDetails({
        id: "",
        name: "",
        houseAddr: "",
        cityAddr: "",
        stateAddr: "",
        postalAddr: "",
        countryAddr: "",
        phone: "",
        email: "",
        runningDisease1: "",
        runningDisease2: "",
        symptoms: "",
        medication: "",
        additionalInfo: "",
      });
      setErrorMessage("Patient not found or an error occurred.");
      console.error(error);
    }
  };

  return (
    <div className="md:w-1/2 h-full ">
      <div className="border rounded-lg p-5 ">
        <p className=" font-semibold">Get Patient details</p>
        <form className="">
          <input
            type="text"
            placeholder="Patient Address"
            value={patientAddress}
            onChange={(e) => setPatientAddress(e.target.value)}
            className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
          />
          <button
            type="button"
            onClick={handleGetPatientDetails}
            className=" border w-full p-2 px-2 mb-2 rounded-lg focus:outline-none bg-lightPrimary"
          >
            Get Patient Details
          </button>
        </form>
        {patientDetails.name && (
          <div>
            <p>Id: {patientDetails.id}</p>
            <p>Name: {patientDetails.name}</p>
            <p>House Address: {patientDetails.houseAddr}</p>
            <p>City Address: {patientDetails.cityAddr}</p>
            <p>State Address: {patientDetails.stateAddr}</p>
            <p>Postal Address: {patientDetails.postalAddr}</p>
            <p>Country Address: {patientDetails.countryAddr}</p>
            <p>Phone: {patientDetails.phone}</p>
            <p>Email: {patientDetails.email}</p>
            <p>Running Disease 1: {patientDetails.runningDisease1}</p>
            <p>Running Disease 2: {patientDetails.runningDisease2}</p>
            <p>Symptoms: {patientDetails.symptoms}</p>
            <p>Medication: {patientDetails.medication}</p>
            <p>Additional Info: {patientDetails.additionalInfo}</p>
          </div>
        )}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>
      <AddPatient contract={contract} />
    </div>
  );
}

export default GetPatientDetails;
