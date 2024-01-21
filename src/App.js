// App.js
import React, { useState } from "react";
import DoctorAvailability from "./components/DoctorAvailability";
import PatientAppointment from "./components/PatientAppointment";
import DoctorAllocation from "./components/DoctorAllocation";
import PatientAllocatedMedicine from "./components/PatientAllocatedMedicine";

const App = () => {
  const [doctorAvailability, setDoctorAvailability] = useState([]);
  const [bookedAppointments, setBookedAppointments] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const bookAppointment = (slot) => {
    setBookedAppointments([...bookedAppointments, slot]);
  };

  return (
    <div>
      <DoctorAllocation />

      <PatientAllocatedMedicine selectedDate={selectedDate} />
      {/* <PatientAppointment /> */}
      <br />
      <DoctorAvailability setDoctorAvailability={setDoctorAvailability} />
      <hr />
      <PatientAppointment
        doctorAvailability={doctorAvailability}
        bookAppointment={bookAppointment}
      />
      <hr />
      <h2>Booked Appointments</h2>
      <ul>
        {bookedAppointments.map((slot) => (
          <li key={slot}>{slot}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
