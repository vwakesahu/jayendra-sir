import React, { useState } from "react";
import { format } from "date-fns";
import { saveItem } from "../utils/firebase-functions"; 
const DoctorAvailability = ({ setDoctorAvailability }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlots, setSelectedSlots] = useState([]);

  const handleSetAvailability = async () => {
    const formattedDate = format(selectedDate, "yyyy-MM-dd");
    const availability = selectedSlots.map(
      (slot) => `${formattedDate} ${slot}`
    );

    try {
      await saveItem({ date: formattedDate, slots: availability });
      setDoctorAvailability(availability);
    } catch (error) {
      console.error("Error setting availability:", error);
    }
  };

  return (
    <div>
      <h2>Set Doctor Availability</h2>
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
        Select Available Slots:
        <select
          multiple
          value={selectedSlots}
          onChange={(e) =>
            setSelectedSlots(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
        >
          <option value="09:00">9:00 AM</option>
          <option value="10:00">10:00 AM</option>
          <option value="11:00">11:00 AM</option>
        </select>
      </label>
      <br />
      <button onClick={handleSetAvailability}>Set Availability</button>
    </div>
  );
};

export default DoctorAvailability;
