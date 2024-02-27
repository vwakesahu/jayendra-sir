import React, { useState } from "react";

const Doctor = () => {
  const [newEntryForm, setNewEntryForm] = useState({
    doctorId: "",
    doctorName: "",
    doctorAddress: "",
    doctorCity: "",
    doctorState: "",
    doctorCountry: "",
    doctorPostalCode: "",
    doctorEmail: "",
    doctorPhoneNumber: "",
    qualification: "",
    licenseNumber: "",
  });

  const [doctorRecordForm, setDoctorRecordForm] = useState({
    doctorId: "",
    dname: "",
    daddress: "",
    dcity: "",
    dstate: "",
    dpostalcode: "",
    dcountry: "",
    dphonenumber: "",
    demailid: "",
    licensenumber: "",
    qualification: "",
  });

  const [patientRecordForm, setPatientRecordForm] = useState({
    id: "",
    name: "",
    address: "",
    city: "",
    state: "",
    postalcode: "",
    country: "",
    phoneNumber: "",
    email: "",
    regisDate: "",
    disease: "",
    symptoms: "",
    medicine: "",
    additionalInfo: "",
    doctorId: "",
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

  const handlePatientRecordFormChange = (e) => {
    const { name, value } = e.target;
    setPatientRecordForm({
      ...patientRecordForm,
      [name]: value,
    });
  };

  const handleDocRecInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorRecordForm({
      ...doctorRecordForm,
      [name]: value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntryForm({
      ...newEntryForm,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(newEntryForm));
  };

  const handleDocRecoformSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(doctorRecordForm));
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="w-full">
        <form onSubmit={handleSubmit} className="w-full border p-4 mt-10">
          <p className="text-xl">New Entry Form:</p>
          <div className="grid grid-cols-2 gap-2 w-full overflow-hidden">
            <div className="w-full">
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Doctor Id"
                name="doctorId"
                value={newEntryForm.doctorId}
                onChange={handleInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Doctor Address"
                name="doctorAddress"
                value={newEntryForm.doctorAddress}
                onChange={handleInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Doctor State"
                name="doctorState"
                value={newEntryForm.doctorState}
                onChange={handleInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Doctor Country"
                name="doctorCountry"
                value={newEntryForm.doctorCountry}
                onChange={handleInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Doctor Email"
                name="doctorEmail"
                value={newEntryForm.doctorEmail}
                onChange={handleInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Qualification"
                name="qualification"
                value={newEntryForm.qualification}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full">
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Doctor Name"
                name="doctorName"
                value={newEntryForm.doctorName}
                onChange={handleInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Doctor City"
                name="doctorCity"
                value={newEntryForm.doctorCity}
                onChange={handleInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Doctor Postal Code"
                name="doctorPostalCode"
                value={newEntryForm.doctorPostalCode}
                onChange={handleInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Doctor Phone Number"
                name="doctorPhoneNumber"
                value={newEntryForm.doctorPhoneNumber}
                onChange={handleInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="License Number"
                name="licenseNumber"
                value={newEntryForm.licenseNumber}
                onChange={handleInputChange}
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

        <form onSubmit={handleSubmit} className="w-full border p-4 mt-10">
          <p className="text-xl">Doctor Record Form:</p>
          <div className="grid grid-cols-2 gap-2 w-full overflow-hidden">
            <div className="w-full">
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Doctor Id"
                name="doctorId"
                value={doctorRecordForm.doctorId}
                onChange={handleDocRecInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Doctor Name"
                name="dname"
                value={doctorRecordForm.dname}
                onChange={handleDocRecInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Doctor Address"
                name="daddress"
                value={doctorRecordForm.daddress}
                onChange={handleDocRecInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Doctor City"
                name="dcity"
                value={doctorRecordForm.dcity}
                onChange={handleDocRecInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Doctor State"
                name="dstate"
                value={doctorRecordForm.dstate}
                onChange={handleDocRecInputChange}
              />{" "}
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Doctor Postal Code"
                name="dpostalcode"
                value={doctorRecordForm.dpostalcode}
                onChange={handleDocRecInputChange}
              />
            </div>
            <div>
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Doctor Country"
                name="dcountry"
                value={doctorRecordForm.dcountry}
                onChange={handleDocRecInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Doctor Phone Number"
                name="dphonenumber"
                value={doctorRecordForm.dphonenumber}
                onChange={handleDocRecInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Doctor Email"
                name="demailid"
                value={doctorRecordForm.demailid}
                onChange={handleDocRecInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="License Number"
                name="licensenumber"
                value={doctorRecordForm.licensenumber}
                onChange={handleDocRecInputChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Qualification"
                name="qualification"
                value={doctorRecordForm.qualification}
                onChange={handleDocRecInputChange}
              />
            </div>
          </div>
          <button className="w-full bg-blue-500 rounded-lg p-2 text-white">
            Submit
          </button>
          <button className="w-full bg-blue-300 rounded-lg p-2 text-black mt-4">
            Search
          </button>
          <button className="w-full bg-blue-300 rounded-lg p-2 text-black mt-4">
            Link Pharmacy
          </button>
        </form>
      </div>
      <div className="w-full">
        <form onSubmit={handleSubmit} className="w-full border p-4 mt-10">
          <p className="text-xl">Patient Record Form:</p>
          <div className="grid grid-cols-2 gap-2 w-full overflow-hidden">
            <div className="w-full">
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="ID"
                name="id"
                value={patientRecordForm.id}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Name"
                name="name"
                value={patientRecordForm.name}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Address"
                name="address"
                value={patientRecordForm.address}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="City"
                name="city"
                value={patientRecordForm.city}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="State"
                name="state"
                value={patientRecordForm.state}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Postal Code"
                name="postalcode"
                value={patientRecordForm.postalcode}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Country"
                name="country"
                value={patientRecordForm.country}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Phone Number"
                name="phoneNumber"
                value={patientRecordForm.phoneNumber}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Email"
                name="email"
                value={patientRecordForm.email}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Registration Date"
                name="regisDate"
                value={patientRecordForm.regisDate}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Any Running Disease"
                name="disease"
                value={patientRecordForm.disease}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Symptoms"
                name="symptoms"
                value={patientRecordForm.symptoms}
                onChange={handlePatientRecordFormChange}
              />{" "}
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Taking Medicine"
                name="medicine"
                value={patientRecordForm.medicine}
                onChange={handlePatientRecordFormChange}
              />
            </div>
            <div>
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Additional Info"
                name="additionalInfo"
                value={patientRecordForm.additionalInfo}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Doctor ID"
                name="doctorId"
                value={patientRecordForm.doctorId}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Drug 1"
                name="drug1"
                value={patientRecordForm.drug1}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Drug 2"
                name="drug2"
                value={patientRecordForm.drug2}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Drug 3"
                name="drug3"
                value={patientRecordForm.drug3}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Drug 4"
                name="drug4"
                value={patientRecordForm.drug4}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Drug 5"
                name="drug5"
                value={patientRecordForm.drug5}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Dosage 1"
                name="dosage1"
                value={patientRecordForm.dosage1}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Dosage 2"
                name="dosage2"
                value={patientRecordForm.dosage2}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Dosage 3"
                name="dosage3"
                value={patientRecordForm.dosage3}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Dosage 4"
                name="dosage4"
                value={patientRecordForm.dosage4}
                onChange={handlePatientRecordFormChange}
              />
              <input
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                placeholder="Dosage 5"
                name="dosage5"
                value={patientRecordForm.dosage5}
                onChange={handlePatientRecordFormChange}
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
        <form className="w-full border p-4 mt-10">
          <p className="text-xl">Pharmacy Stocks:</p>
          <div className="grid">
            <div className="w-full">
              <input
                placeholder="Paracetamol"
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                value={100}
                disabled
              />
              <input
                placeholder="Ofloxacin"
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                value={100}
                disabled
              />
              <input
                placeholder="Glycomet"
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                value={100}
                disabled
              />
              <input
                placeholder="Insulin"
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                value={100}
                disabled
              />
              <input
                placeholder="Amoxil"
                className=" border w-full p-2 px-2 my-2 rounded-lg focus:outline-none"
                value={100}
                disabled
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Doctor;
