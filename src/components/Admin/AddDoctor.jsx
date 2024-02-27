import React, { useState } from "react";
import { ethers } from "ethers";
import GetDoctor from "./GetDoctor";

function AddDoctor({ contract }) {
  const [doctorAddress, setDoctorAddress] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [houseAddr, setHouseAddr] = useState("");
  const [cityAddr, setCityAddr] = useState("");
  const [stateAddr, setStateAddr] = useState("");
  const [postalAddr, setPostalAddr] = useState("");
  const [countryAddr, setCountryAddr] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [licenseNo, setLicenseNo] = useState("");
  const [qualification, setQualification] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddDoctor = async () => {
    try {
      const transaction = await contract.addDoctor(
        doctorAddress,
        id,
        name,
        houseAddr,
        cityAddr,
        stateAddr,
        postalAddr,
        countryAddr,
        phone,
        email,
        ethers.utils.parseUnits(licenseNo.toString(), 0), // Convert licenseNo to uint256
        qualification
      );

      await transaction.wait();
      setErrorMessage("");
      // Clear the form fields after a successful transaction
      setDoctorAddress("");
      setId("");
      setName("");
      setHouseAddr("");
      setCityAddr("");
      setStateAddr("");
      setPostalAddr("");
      setCountryAddr("");
      setPhone("");
      setEmail("");
      setLicenseNo("");
      setQualification("");
    } catch (error) {
      setErrorMessage("Transaction failed. Check the input and try again.");
      console.error(error);
    }
  };

  return (
    <div className="md:w-1/2 h-full ">
      <div className="border rounded-lg p-5 mb-8">
      <p className=" font-semibold">Add Doctor</p>
      <form>
        <input
          type="text"
          placeholder="Doctor Address"
          value={doctorAddress}
          onChange={(e) => setDoctorAddress(e.target.value)}
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
          placeholder="License Number"
          value={licenseNo}
          onChange={(e) => setLicenseNo(e.target.value)}
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="Qualification"
          value={qualification}
          onChange={(e) => setQualification(e.target.value)}
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <button
          type="button"
          onClick={handleAddDoctor}
          className=" border w-full p-2 px-2 mb-2 rounded-lg focus:outline-none bg-lightPrimary"
        >
          Add Doctor
        </button>
      </form>
      </div>
      <GetDoctor contract={contract} />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}

export default AddDoctor;
