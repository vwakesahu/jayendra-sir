// App.js
import React, { useEffect, useState } from "react";
import { useSDK } from "@metamask/sdk-react";
import PatientRecordsABI from "./contract/PatientRecords.json";
import Web3 from "web3";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Doctor from "./pages/Doctor";
import Dashboard from "./pages/Dashboard";
import Pharmacy from "./pages/Pharmacy";
import Distributor from "./pages/Distributor";
import Manufacturer from "./pages/Manufacturer";
import Stocklist from "./pages/Stocklist";
import Supplier from "./pages/Supplier";


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

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      setAccount(accounts?.[0]);
    } catch (err) {
      console.warn(`failed to connect..`, err);
    }
  };

  return (
    <div>
      {/* <button style={{ padding: 10, margin: 10 }} onClick={connect}>
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
      )} */}

      <Navbar />
      <Routes>
        <Route path="/supplier" element={<Supplier />} />
        <Route path="/stocklist" element={<Stocklist />} />
        <Route path="/manufacturer" element={<Manufacturer />} />
        <Route path="/distributor" element={<Distributor />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/doctor" element={<Doctor />} />
        {/* <Route path="/login" element={<Login />} />
        <Route
          path="/doctordashboard"
          element={<DoctorDashboard contract={contract} />}
        />
        <Route
          path="/admindashboard"
          element={<AdminDashboard contract={contract} />}
        />
        <Route
          path="/supplierdashboard"
          element={<SupplierDashboard contract={contract} />}
        /> */}
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
