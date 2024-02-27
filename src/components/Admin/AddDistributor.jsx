import React, { useState } from "react";
import GetDistributor from "./GetDistributor";

const AdminDistributor = ({ contract }) => {
  const [distributorAddress, setDistributorAddress] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddDistributor = async () => {
    try {
      const transaction = await contract.addDistributor(
        distributorAddress,
        name
      );

      await transaction.wait();
      setErrorMessage("");
      // Clear the form fields after a successful transaction
      setDistributorAddress("");
      setName("");
    } catch (error) {
      setErrorMessage("Transaction failed. Check the input and try again.");
      console.error(error);
    }
  };

  return (
    <div className=" md:w-[50%] h-full border rounded-lg p-5 ">
      <p className=" font-semibold">Add Distributor</p>
      <form>
        <input
          type="text"
          placeholder="Distributor Address"
          value={distributorAddress}
          onChange={(e) => setDistributorAddress(e.target.value)}
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
          onClick={handleAddDistributor}
          className="border w-full p-2 px-2 mb-2 rounded-lg focus:outline-none bg-lightPrimary"
        >
          Add Distributor
        </button>
      </form>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <GetDistributor contract={contract} />
    </div>
  );
};

export default AdminDistributor;
