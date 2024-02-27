import React, { useState } from "react";

function GetSupplier({ contract }) {
  const [supplierAddress, setSupplierAddress] = useState("");
  const [supplierDetails, setSupplierDetails] = useState({
    address: "",
    name: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleGetSupplierDetails = async () => {
    try {
      const result = await contract.suppliers(supplierAddress);

      if (result) {
        const formattedDetails = {
          address: result[0],
          name: result[1],
        };
        setSupplierDetails(formattedDetails);
        setErrorMessage("");
      } else {
        setSupplierDetails({
          address: "",
          name: "",
        });
        setErrorMessage("Supplier not found or an error occurred.");
      }
    } catch (error) {
      setSupplierDetails({
        address: "",
        name: "",
      });
      setErrorMessage("Supplier not found or an error occurred.");
      console.error(error);
    }
  };

  return (
    <div className=" h-full border rounded-lg p-5 ">
      <p>Get Supplier details</p>
      <form>
        <input
          type="text"
          placeholder="Supplier Address"
          value={supplierAddress}
          onChange={(e) => setSupplierAddress(e.target.value)}
          className="border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <button
          type="button"
          onClick={handleGetSupplierDetails}
          className="border w-full p-2 px-2 mb-2 rounded-lg focus:outline-none bg-lightPrimary"
        >
          Get Supplier Details
        </button>
      </form>

      {supplierDetails.name && (
        <div>
          <p>Supplier Address: {supplierDetails.address}</p>
          <p>Supplier Name: {supplierDetails.name}</p>
        </div>
      )
      }

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}

export default GetSupplier;
