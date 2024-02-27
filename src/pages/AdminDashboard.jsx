import React from "react";
import AddDoctor from "../components/Admin/AddDoctor";
import AddPatient from "../components/Admin/GetPatientDetails";
import AddDrug from "../components/Admin/AddDrug";
import AddDistributor from "../components/Admin/AddDistributor";
import AddPharmacy from "../components/Admin/AddPharmacy";
import AddSupplier from "../components/Admin/AddSupplier";

const AdminDashboard = ({ signer, account, provider, contract }) => {
  return (
    <div className=" w-full flex flex-col items-center justify-center gap-6 md:mt-24 mt-12">
      <p className=" text-xl font-semibold">AdminDashboard</p>
      <AddDoctor
        signer={signer}
        account={account}
        provider={provider}
        contract={contract}
      />
      <AddPatient
        signer={signer}
        account={account}
        provider={provider}
        contract={contract}
      />
      <AddDrug
        signer={signer}
        account={account}
        provider={provider}
        contract={contract}
      />
      <AddDistributor
        signer={signer}
        account={account}
        provider={provider}
        contract={contract}
      />
      <AddPharmacy
        signer={signer}
        account={account}
        provider={provider}
        contract={contract}
      />
      <AddSupplier
        signer={signer}
        account={account}
        provider={provider}
        contract={contract}
      />
    </div>
  );
};

export default AdminDashboard;
