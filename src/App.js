// App.js
import React, { useEffect, useState } from "react";
import DoctorAvailability from "./components/DoctorAvailability";
import PatientAppointment from "./components/PatientAppointment";
import DoctorAllocation from "./components/DoctorAllocation";
import PatientAllocatedMedicine from "./components/PatientAllocatedMedicine";
import SmartContract from "./components/SmartContract";
import { useSDK } from "@metamask/sdk-react";
import PatientRecordsABI from "./contract/PatientRecords.json";
import Web3 from "web3";

const App = () => {
  const [account, setAccount] = useState();
  const { sdk, connected, connecting, provider, chainId } = useSDK();
  const [doctorAvailability, setDoctorAvailability] = useState([]);
  const [bookedAppointments, setBookedAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [recordCount, setRecordCount] = useState(0);
  const [patientName, setPatientName] = useState("");
  const [stepCount, setStepCount] = useState(0);
  const [bloodRate, setBloodRate] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [selectedRecordId, setSelectedRecordId] = useState(1);

  const [retrievedRecord, setRetrievedRecord] = useState({
    recordId: 0,
    timestamp: 0,
    patientName: "",
    stepCount: 0,
    bloodRate: 0,
    height: 0,
    weight: 0,
  });

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.enable();
        setWeb3(web3Instance);

        const contractAddress = "0xdeb69FBDEf192040184Bc0d227E76e91854Df1b2";
        const contractInstance = new web3Instance.eth.Contract(
          PatientRecordsABI,
          contractAddress
        );
        setContract(contractInstance);

        const accounts = await web3Instance.eth.getAccounts();
        setAccount(accounts[0]);
      } else {
        console.error("Web3 not found");
      }
    };

    init();
  }, []);

  const getPatientRecord = async () => {
    try {
      const result = await contract.methods
        .getPatientRecord(selectedRecordId)
        .call();

      const convertedRecord = {
        recordId: Number(result[0]),
        timestamp: Number(result[1]),
        patientName: String(result[2]),
        stepCount: Number(result[3]),
        bloodRate: Number(result[4]),
        height: Number(result[5]),
        weight: Number(result[6]),
      };

      setRetrievedRecord(convertedRecord);

      console.log("Patient record retrieved successfully:", retrievedRecord);
    } catch (error) {
      console.error("Error retrieving patient record:", error);
    }
  };

  const addPatientRecord = async () => {
    try {
      await contract.methods
        .addPatientRecord(patientName, stepCount, bloodRate, height, weight)
        .send({ from: account });

      console.log("Patient record added successfully");
    } catch (error) {
      console.error("Error adding patient record:", error);
    }
  };

  const getLatestRecordCount = async () => {
    try {
      const latestRecordCount = await contract.methods
        .getLatestRecordCount()
        .call();
      setRecordCount(latestRecordCount);
      console.log(latestRecordCount);
    } catch (error) {
      console.error("Error getting latest record count:", error);
    }
  };

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      setAccount(accounts?.[0]);
    } catch (err) {
      console.warn(`failed to connect..`, err);
    }
  };
  const bookAppointment = (slot) => {
    setBookedAppointments([...bookedAppointments, slot]);
  };

  return (
    <div>
      <button style={{ padding: 10, margin: 10 }} onClick={connect}>
        Connect
      </button>
      {connected && (
        <div>
          <>
            {chainId && `Connected chain: ${chainId}`}
            <p></p>
            {account && `Connected account: ${account}`}
          </>
        </div>
      )}
      <div>
        <h1>Interact with Smart Contract</h1>
        <p>Account: {account}</p>
        <p>Latest Record Count: {recordCount}</p>
        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Step Count"
          value={stepCount}
          onChange={(e) => setStepCount(e.target.value)}
        />
        <input
          type="number"
          placeholder="Blood Rate"
          value={bloodRate}
          onChange={(e) => setBloodRate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button onClick={addPatientRecord}>Add Patient Record</button>
        <button onClick={getLatestRecordCount}>Get Latest Record Count</button>
      </div>

      <input
        type="number"
        placeholder="Record ID"
        value={selectedRecordId}
        onChange={(e) => setSelectedRecordId(e.target.value)}
      />
      <button onClick={getPatientRecord}>Get Patient Record</button>

      <div>
        <h2>Retrieved Patient Record</h2>
        <p>Record ID: {retrievedRecord.recordId}</p>
        <p>Timestamp: {retrievedRecord.timestamp}</p>
        <p>Patient Name: {retrievedRecord.patientName}</p>
        <p>Step Count: {retrievedRecord.stepCount}</p>
        <p>Blood Rate: {retrievedRecord.bloodRate}</p>
        <p>Height: {retrievedRecord.height}</p>
        <p>Weight: {retrievedRecord.weight}</p>
      </div>
      <SmartContract />
      <DoctorAllocation />

      <PatientAllocatedMedicine selectedDate={selectedDate} />

      <br />
      <DoctorAvailability setDoctorAvailability={setDoctorAvailability} />
      <hr />
      <PatientAppointment
        doctorAvailability={doctorAvailability}
        bookAppointment={bookAppointment}
      />
      <hr />
      <h2>Booked Appointments</h2>
      <ul>
        {bookedAppointments.map((slot) => (
          <li key={slot}>{slot}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
