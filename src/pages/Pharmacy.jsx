import React, { useState } from "react";

const Pharmacy = () => {
  const [inventory, setInventory] = useState({
    paracetamol: "",
    ofloxacin: "",
    glycomet: "",
    insulin: "",
    amoxil: "",
  });

  const handleInventoryChange = (e) => {
    const { name, value } = e.target;
    setInventory({
      ...inventory,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(inventory));
  };

  const [searchId, setSearchId] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchId(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching customer with ID:", searchId);
  };

  const [prescription, setPrescription] = useState({
    id: "",
    name: "",
    drug1: "",
    drug2: "",
    drug3: "",
    drug4: "",
    drug5: "",
    dosage1: "",
    dosage2: "",
    dosage3: "",
    dosage4: "",
    dosage5: "",
  });

  const handlePrescriptionInputChange = (e) => {
    const { name, value } = e.target;
    setPrescription({
      ...prescription,
      [name]: value,
    });
  };

  const handlePrescriptionSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(prescription));
  };

  const [disStock, setDISStock] = useState({
    paracetamol: "",
    ofloxacin: "",
    glycomet: "",
    insulin: "",
    amoxil: "",
  });

  const handleDISStockChange = (e) => {
    const { name, value } = e.target;
    setDISStock({
      ...disStock,
      [name]: value,
    });
  };

  const handleDISStockSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(disStock));
  };

  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="w-full">
        <form onSubmit={handleSubmit} className="w-full border p-4 mt-10">
          <p className="text-xl">Inventory:</p>

          <div className="w-full">
            <input
              className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
              placeholder="Paracetamol"
              name="paracetamol"
              value={inventory.paracetamol}
              onChange={handleInventoryChange}
            />
            <input
              className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
              placeholder="Ofloxacin"
              name="ofloxacin"
              value={inventory.ofloxacin}
              onChange={handleInventoryChange}
            />
            <input
              className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
              placeholder="Glycomet"
              name="glycomet"
              value={inventory.glycomet}
              onChange={handleInventoryChange}
            />
            <input
              className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
              placeholder="Insulin"
              name="insulin"
              value={inventory.insulin}
              onChange={handleInventoryChange}
            />
            <input
              className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
              placeholder="Amoxil"
              name="amoxil"
              value={inventory.amoxil}
              onChange={handleInventoryChange}
            />
          </div>
          <button className="w-full bg-blue-500 rounded-lg p-2 text-white">
            Submit
          </button>
          <button className="w-full bg-blue-300 rounded-lg p-2 text-black mt-4">
            Cancel
          </button>
          <button className="w-full bg-blue-300 rounded-lg p-2 text-black mt-4">
            Available Stocks
          </button>
        </form>
      </div>
      <div className="w-full">
        {" "}
        <form onSubmit={handleSearchSubmit} className="w-full border p-4 mt-10">
          <p className="text-xl">Customer Request:</p>

          <div className="w-full">
            <input
              className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
              placeholder="Search by ID"
              value={searchId}
              onChange={handleSearchInputChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 rounded-lg p-2 text-white"
          >
            Search
          </button>
        </form>
      </div>
      <div className="w-full">
        {" "}
        <form
          onSubmit={handlePrescriptionSubmit}
          className="w-full border p-4 mt-10"
        >
          <p className="text-xl">Check Prescription:</p>
          <div className="grid grid-cols-2 gap-2 w-full overflow-hidden">
            <div className="w-full">
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="ID"
                name="id"
                value={prescription.id}
                onChange={handlePrescriptionInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Name"
                name="name"
                value={prescription.name}
                onChange={handlePrescriptionInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Drug 1"
                name="drug1"
                value={prescription.drug1}
                onChange={handlePrescriptionInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Drug 2"
                name="drug2"
                value={prescription.drug2}
                onChange={handlePrescriptionInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Drug 3"
                name="drug3"
                value={prescription.drug3}
                onChange={handlePrescriptionInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Drug 4"
                name="drug4"
                value={prescription.drug4}
                onChange={handlePrescriptionInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Drug 5"
                name="drug5"
                value={prescription.drug5}
                onChange={handlePrescriptionInputChange}
              />
            </div>
            <div>
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Dosage 1"
                name="dosage1"
                value={prescription.dosage1}
                onChange={handlePrescriptionInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Dosage 2"
                name="dosage2"
                value={prescription.dosage2}
                onChange={handlePrescriptionInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Dosage 3"
                name="dosage3"
                value={prescription.dosage3}
                onChange={handlePrescriptionInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Dosage 4"
                name="dosage4"
                value={prescription.dosage4}
                onChange={handlePrescriptionInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Dosage 5"
                name="dosage5"
                value={prescription.dosage5}
                onChange={handlePrescriptionInputChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 rounded-lg p-2 text-white"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="w-full">
        {" "}
        <form
          onSubmit={handleDISStockSubmit}
          className="w-full border p-4 mt-10"
        >
          <p className="text-xl">DIS Stock:</p>
          <div className="w-full">
            <input
              className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
              placeholder="Paracetamol"
              name="paracetamol"
              value={disStock.paracetamol}
              onChange={handleDISStockChange}
            />
            <input
              className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
              placeholder="Ofloxacin"
              name="ofloxacin"
              value={disStock.ofloxacin}
              onChange={handleDISStockChange}
            />
            <input
              className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
              placeholder="Glycomet"
              name="glycomet"
              value={disStock.glycomet}
              onChange={handleDISStockChange}
            />
            <input
              className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
              placeholder="Insulin"
              name="insulin"
              value={disStock.insulin}
              onChange={handleDISStockChange}
            />
            <input
              className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
              placeholder="Amoxil"
              name="amoxil"
              value={disStock.amoxil}
              onChange={handleDISStockChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 rounded-lg p-2 text-white"
          >
            Submit
          </button>
          <button
            type="submit"
            className="w-full bg-blue-300 rounded-lg p-2 text-black mt-4"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full bg-blue-300 rounded-lg p-2 text-black mt-4"
          >
            Available Stocks
          </button>
        </form>
      </div>
    </div>
  );
};

export default Pharmacy;
