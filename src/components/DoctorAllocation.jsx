import React, { useState } from "react";
import { format } from "date-fns";
import { saveAllocation } from "../utils/firebase-functions";

const DoctorAllocation = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMedicine, setSelectedMedicine] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const handleAllocate = async () => {
    const formattedDate = format(selectedDate, "yyyy-MM-dd");
    const allocation = {
      date: formattedDate,
      medicine: selectedMedicine,
      timeSlot: selectedTimeSlot,
    };

    try {
      await saveAllocation(allocation);
      alert("Allocation successful!");
    } catch (error) {
      console.error("Error allocating:", error);
    }
  };

  return (
    <div>
      <h2>Allocate Medicine and Time Slot</h2>
      <label>
        Select Date:
        <input
          type="date"
          value={format(selectedDate, "yyyy-MM-dd")}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
        />
      </label>
      <br />
      <label>
        Medicine:
        <input
          type="text"
          value={selectedMedicine}
          onChange={(e) => setSelectedMedicine(e.target.value)}
        />
      </label>
      <br />
      <label>
        Time Slot:
        <select
          value={selectedTimeSlot}
          onChange={(e) => setSelectedTimeSlot(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="09:00">9:00 AM</option>
          <option value="10:00">10:00 AM</option>
          <option value="11:00">11:00 AM</option>
          {/* Add more options as needed */}
        </select>
      </label>
      <br />
      <button onClick={handleAllocate}>Allocate</button>
    </div>
  );
};

export default DoctorAllocation;
