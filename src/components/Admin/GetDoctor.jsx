import React, { useState } from "react";
import AddDoctor from "./AddDoctor.jsx";

function AdminDoctor({ contract }) {
  const [doctorAddress, setDoctorAddress] = useState("");
  const [doctorDetails, setDoctorDetails] = useState({
    id: "",
    name: "",
    houseAddr: "",
    cityAddr: "",
    stateAddr: "",
    postalAddr: "",
    countryAddr: "",
    phone: "",
    email: "",
    licenseNo: "",
    qualification: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleGetDoctorDetails = async () => {
    try {
      const result = await contract.doctors(doctorAddress);
      console.log(result);
      // Handle the ENS error
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
          licenseNo: result[9]._hex,
          qualification: result[10],
        };
        setDoctorDetails(formattedDetails);
        setErrorMessage("");
      } else {
        setDoctorDetails({
          id: "",
          name: "",
          houseAddr: "",
          cityAddr: "",
          stateAddr: "",
          postalAddr: "",
          countryAddr: "",
          phone: "",
          email: "",
          licenseNo: "",
          qualification: "",
        });
        setErrorMessage("Doctor not found or an error occurred.");
      }
    } catch (error) {
      setDoctorDetails({
        id: "",
        name: "",
        houseAddr: "",
        cityAddr: "",
        stateAddr: "",
        postalAddr: "",
        countryAddr: "",
        phone: "",
        email: "",
        licenseNo: "",
        qualification: "",
      });
      setErrorMessage("Doctor not found or an error occurred.");
      console.error(error);
    }
  };

  return (
    <div className=" ">
      <div className="h-full border rounded-lg p-5 mb-6">
        <p className=" font-semibold">Get Doctor details</p>
        <form className="">
          <input
            type="text"
            placeholder="Doctor Address"
            value={doctorAddress}
            onChange={(e) => setDoctorAddress(e.target.value)}
            className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
          />
          <button
            type="button"
            onClick={handleGetDoctorDetails}
            className=" border w-full p-2 px-2 mb-2 rounded-lg focus:outline-none bg-lightPrimary"
          >
            Get Doctor Details
          </button>
        </form>
      </div>

      {doctorDetails.name && (
        <div>
          <p>Id: {doctorDetails.id}</p>
          <p>Name: {doctorDetails.name}</p>
          <p>House Address: {doctorDetails.houseAddr}</p>
          <p>City Address: {doctorDetails.cityAddr}</p>
          <p>State Address: {doctorDetails.stateAddr}</p>
          <p>Postal Address: {doctorDetails.postalAddr}</p>
          <p>Country Address: {doctorDetails.countryAddr}</p>
          <p>Phone: {doctorDetails.phone}</p>
          <p>Email: {doctorDetails.email}</p>
          <p>License Number: {doctorDetails.licenseNo}</p>
          <p>Qualification: {doctorDetails.qualification}</p>
        </div>
      )}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}

export default AdminDoctor;
