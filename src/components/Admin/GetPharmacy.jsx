import React, { useState } from "react";

function GetPharmacy({ contract }) {
  const [pharmacyAddress, setPharmacyAddress] = useState("");
  const [pharmacyDetails, setPharmacyDetails] = useState({
    address: "",
    name: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleGetPharmacyDetails = async () => {
    try {
      const result = await contract.pharmacies(pharmacyAddress);

      if (result) {
        const formattedDetails = {
          address: result[0],
          name: result[1],
        };
        setPharmacyDetails(formattedDetails);
        setErrorMessage("");
      } else {
        setPharmacyDetails({
          address: "",
          name: "",
        });
        setErrorMessage("Pharmacy not found or an error occurred.");
      }
    } catch (error) {
      setPharmacyDetails({
        address: "",
        name: "",
      });
      setErrorMessage("Pharmacy not found or an error occurred.");
      console.error(error);
    }
  };

  return (
    <div className="h-full border rounded-lg p-5 ">
      <p>Get Pharmacy details</p>
      <form>
        <input
          type="text"
          placeholder="Pharmacy Address"
          value={pharmacyAddress}
          onChange={(e) => setPharmacyAddress(e.target.value)}
          className="border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <button
          type="button"
          onClick={handleGetPharmacyDetails}
          className="border w-full p-2 px-2 mb-2 rounded-lg focus:outline-none bg-lightPrimary"
        >
          Get Pharmacy Details
        </button>
      </form>

      {pharmacyDetails.name && (
        <div>
          <p>Pharmacy Address: {pharmacyDetails.address}</p>
          <p>Pharmacy Name: {pharmacyDetails.name}</p>
        </div>
      )
      }

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}

export default GetPharmacy;
