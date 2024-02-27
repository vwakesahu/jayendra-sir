import React, { useState } from "react";
import GetSupplier from "./GetSupplier";

function AddSupplier({ contract }) {
  const [supplierAddress, setSupplierAddress] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddSupplier = async () => {
    try {
      const transaction = await contract.addSupplier(supplierAddress, name);

      await transaction.wait();
      setErrorMessage("");
      // Clear the form fields after a successful transaction
      setSupplierAddress("");
      setName("");
    } catch (error) {
      setErrorMessage("Transaction failed. Check the input and try again.");
      console.error(error);
    }
  };

  return (
    <div className="md:w-[50%] h-full border rounded-lg p-5">
      <p className="font-semibold">Add Supplier</p>
      <form>
        <input
          type="text"
          placeholder="Supplier Address"
          value={supplierAddress}
          onChange={(e) => setSupplierAddress(e.target.value)}
          className="border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <button
          type="button"
          onClick={handleAddSupplier}
          className="border w-full p-2 px-2 mb-2 rounded-lg focus:outline-none bg-lightPrimary"
        >
          Add Supplier
        </button>
      </form>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <GetSupplier contract={contract} />
    </div>
  );
}

export default AddSupplier;
