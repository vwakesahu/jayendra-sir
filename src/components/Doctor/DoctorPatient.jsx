import React from "react";
import GetPatientDetails from "../Admin/GetPatientDetails";
import AllocateDrugs from "./AllocateDrugs";

const DoctorPatient = ({ contract }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <GetPatientDetails contract={contract}/>
      <AllocateDrugs contract={contract}/>
    </div>
  );
};

export default DoctorPatient;
