import React, { useState } from "react";
import GetPharmacy from "./GetPharmacy";

function AddPharmacy({ contract }) {
  const [pharmacyAddress, setPharmacyAddress] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddPharmacy = async () => {
    try {
      const transaction = await contract.addPharmacy(pharmacyAddress, name);

      await transaction.wait();
      setErrorMessage("");
      // Clear the form fields after a successful transaction
      setPharmacyAddress("");
      setName("");
    } catch (error) {
      setErrorMessage("Transaction failed. Check the input and try again.");
      console.error(error);
    }
  };

  return (
    <div className=" md:w-[50%] h-full border rounded-lg p-5 ">
      <p className=" font-semibold">Add Pharmacy</p>
      <form>
        <input
          type="text"
          placeholder="Pharmacy Address"
          value={pharmacyAddress}
          onChange={(e) => setPharmacyAddress(e.target.value)}
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <button
          type="button"
          onClick={handleAddPharmacy}
          className=" border w-full p-2 px-2 mb-2 rounded-lg focus:outline-none bg-lightPrimary"
        >
          Add Pharmacy
        </button>
      </form>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <GetPharmacy contract={contract}/>
    </div>
    
  );
}

export default AddPharmacy;
