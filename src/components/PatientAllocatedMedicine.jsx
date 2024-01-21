import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { getAllocationsForDate } from "../utils/firebase-functions";

const PatientAllocatedMedicine = ({ selectedDate }) => {
  const [allocations, setAllocations] = useState([]);

  useEffect(() => {
    const fetchAllocations = async () => {
      try {
        const formattedDate = format(selectedDate, "yyyy-MM-dd");
        const fetchedAllocations = await getAllocationsForDate(formattedDate);
        setAllocations(fetchedAllocations || []);
      } catch (error) {
        console.error("Error fetching allocations:", error);
      }
    };

    fetchAllocations();
  }, [selectedDate]);

  return (
    <div>
      <h3>Allocated Medicines</h3>
      <table>
        <thead>
          <tr>
            <th>Medicine</th>
            <th>Date</th>
            <th>Time Slot</th>
          </tr>
        </thead>
        <tbody>
          {allocations.map((allocation, index) => (
            <tr key={index}>
              <td>{allocation.medicine}</td>
              <td>{allocation.date}</td>
              <td>{allocation.timeSlot}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientAllocatedMedicine;
