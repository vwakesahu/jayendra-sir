import React, { useState } from "react";
import { ethers } from "ethers";

function AddPatient({ contract, currentUser }) {
  const [patientAddress, setPatientAddress] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [houseAddr, setHouseAddr] = useState("");
  const [cityAddr, setCityAddr] = useState("");
  const [stateAddr, setStateAddr] = useState("");
  const [postalAddr, setPostalAddr] = useState("");
  const [countryAddr, setCountryAddr] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [runningDisease1, setRunningDisease1] = useState("");
  const [runningDisease2, setRunningDisease2] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [medication, setMedication] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddPatient = async () => {
    try {
      const transaction = await contract.addPatient(
        patientAddress,
        id,
        name,
        houseAddr,
        cityAddr,
        stateAddr,
        postalAddr,
        countryAddr,
        phone,
        email,
        runningDisease1,
        runningDisease2,
        symptoms,
        medication,
        additionalInfo,
        { from: currentUser }
      );

      await transaction.wait();
      setErrorMessage("");
      // Clear the form fields after a successful transaction
      setPatientAddress("");
      setId("");
      setName("");
      setHouseAddr("");
      setCityAddr("");
      setStateAddr("");
      setPostalAddr("");
      setCountryAddr("");
      setPhone("");
      setEmail("");
      setRunningDisease1("");
      setRunningDisease2("");
      setSymptoms("");
      setMedication("");
      setAdditionalInfo("");
    } catch (error) {
      setErrorMessage("Transaction failed. Check the input and try again.");
      console.error(error);
    }
  };

  return (
    <div className="border rounded-lg p-5 mt-8 ">
      <p className=" font-semibold">Add Patient</p>
      <form>
        <input
          type="text"
          placeholder="Patient Address"
          value={patientAddress}
          onChange={(e) => setPatientAddress(e.target.value)}
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="House Address"
          value={houseAddr}
          onChange={(e) => setHouseAddr(e.target.value)}
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="City Address"
          value={cityAddr}
          onChange={(e) => setCityAddr(e.target.value)}
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="State Address"
          value={stateAddr}
          onChange={(e) => setStateAddr(e.target.value)}
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="Postal Address"
          value={postalAddr}
          onChange={(e) => setPostalAddr(e.target.value)}
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="Country Address"
          value={countryAddr}
          onChange={(e) => setCountryAddr(e.target.value)}
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="Running Disease 1"
          value={runningDisease1}
          onChange={(e) => setRunningDisease1(e.target.value)}
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="Running Disease 2"
          value={runningDisease2}
          onChange={(e) => setRunningDisease2(e.target.value)}
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="Symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="Medication"
          value={medication}
          onChange={(e) => setMedication(e.target.value)}
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="Additional Info"
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <button
          type="button"
          onClick={handleAddPatient}
          className=" border w-full p-2 px-2 mb-2 rounded-lg focus:outline-none bg-lightPrimary"
        >
          Add Patient
        </button>
      </form>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}

export default AddPatient;
