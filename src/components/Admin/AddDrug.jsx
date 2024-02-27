import { useState } from "react";

function AddDrugForm({  contract }) {
  const [addDrugForm, setAddDrugForm] = useState({
    drugName: "",
    supplyCount: "",
    errorMessage: "",
  });

  const [getSupplyCountForm, setGetSupplyCountForm] = useState({
    drugName: "",
    supplyCount: "",
    errorMessage: "",
  });

  const handleAddDrug = async () => {
    try {
      const transaction = await contract.addDrug(
        addDrugForm.drugName,
        addDrugForm.supplyCount
      );
      await transaction.wait();
      console.log(transaction)
      // Reset form fields after successful transaction
      setAddDrugForm({
        drugName: "",
        supplyCount: "",
        errorMessage: "",
      });
    } catch (error) {
      setAddDrugForm({
        ...addDrugForm,
        errorMessage: "Transaction failed. Check the input and try again.",
      });
      console.error(error);
    }
  };

  const handleGetSupplyCount = async () => {
    try {
      const result = await contract.drugs(getSupplyCountForm.drugName.toString());
      setGetSupplyCountForm({
        ...getSupplyCountForm,
        supplyCount: result.toString(),
        errorMessage: "",
      });
    } catch (error) {
      setGetSupplyCountForm({
        ...getSupplyCountForm,
        supplyCount: "",
        errorMessage: "Drug not found or an error occurred.",
      });
      console.error(error);
    }
  };

  const {
    drugName: addDrugName,
    supplyCount: addSupplyCount,
    errorMessage: addErrorMessage,
  } = addDrugForm;
  const {
    drugName: getDrugName,
    supplyCount: getSupplyCount,
    errorMessage: getErrorMessage,
  } = getSupplyCountForm;

  return (
    <div className=" md:w-[50%] h-full border rounded-lg p-5 ">
      <form className="">
        <p className=" font-semibold">Drug Info.:</p>
        <input
          type="text"
          placeholder="Drug Name"
          value={addDrugName}
          onChange={(e) =>
            setAddDrugForm({ ...addDrugForm, drugName: e.target.value })
          }
          className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
        />
        <input
          type="number"
          placeholder="Supply Count"
          value={addSupplyCount}
          onChange={(e) =>
            setAddDrugForm({ ...addDrugForm, supplyCount: e.target.value })
          }
          className=" border w-full p-2 px-2 mb-2 rounded-lg focus:outline-none"
        />
        <button
          type="button"
          onClick={handleAddDrug}
          className=" border w-full p-2 px-2 mb-2 rounded-lg focus:outline-none bg-lightPrimary"
        >
          Add Drug
        </button>
      </form>
      {addErrorMessage && <p className="text-red-500">{addErrorMessage}</p>}
      <form>
        <input
          type="text"
          placeholder="Drug Name"
          value={getDrugName}
          onChange={(e) =>
            setGetSupplyCountForm({
              ...getSupplyCountForm,
              drugName: e.target.value,
            })
          }
          className=" border w-full p-2 px-2 mb-2 rounded-lg focus:outline-none"
        />
        <button
          type="button"
          onClick={handleGetSupplyCount}
          className=" border w-full p-2 px-2 mb-2 rounded-lg focus:outline-none bg-lightPrimary"
        >
          Get Supply Count
        </button>
      </form>
      {getSupplyCount && (
        <p>
          Supply Count for {getDrugName}: {getSupplyCount}
        </p>
      )}
      {getErrorMessage && <p className="text-red-500">{getErrorMessage}</p>}
    </div>
  );
}

export default AddDrugForm;