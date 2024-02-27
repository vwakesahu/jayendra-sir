import React, { useState } from "react";

function GetDistributor({ contract }) {
  const [distributorAddress, setDistributorAddress] = useState("");
  const [distributorDetails, setDistributorDetails] = useState({
    address: "",
    name: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleGetDistributorDetails = async () => {
    try {
      const result = await contract.distributors(distributorAddress);
        console.log(result);
      if (result.distributorAddress) {
        setDistributorDetails({address:result[0],name:result[1]});
        setErrorMessage("");
      } else {
        setDistributorDetails({
          address: "",
          name: "",
        });
        setErrorMessage("Distributor not found or an error occurred.");
      }
    } catch (error) {
      setDistributorDetails({
        address: "",
        name: "",
      });
      setErrorMessage("Distributor not found or an error occurred.");
      console.error(error);
    }
  };

  return (
    <div className=" h-full border rounded-lg p-5">
      <p>Get Distributor Details</p>
      <form>
        <input
          type="text"
          placeholder="Distributor Address"
          value={distributorAddress}
          onChange={(e) => setDistributorAddress(e.target.value)}
          className="border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <button
          type="button"
          onClick={handleGetDistributorDetails}
          className="border w-full p-2 px-2 mb-2 rounded-lg focus:outline-none bg-lightPrimary"
        >
          Get Distributor Details
        </button>
      </form>

      {distributorDetails.address && (
        <div>
          <p>Distributor Address: {distributorDetails.address}</p>
          <p>Distributor Name: {distributorDetails.name}</p>
        </div>
      )}

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}

export default GetDistributor;
