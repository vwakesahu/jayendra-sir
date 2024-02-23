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
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        await window.ethereum.enable();
        setWeb3(web3Instance);

        const contractAddress = "0xe2689b72273Fed0f400289326E2599323249665f";
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
    </div>
  );
};

export default App;
