import React, { useState, useMemo } from 'react';
import { format, parse, isSameDay } from 'date-fns';

const PatientAppointment = ({ doctorAvailability, bookAppointment }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState('');

  const filteredAvailability = useMemo(() => {
    const formattedDate = format(selectedDate, 'yyyy-MM-dd');
    return doctorAvailability.filter((slot) => isSameDay(parse(slot, 'yyyy-MM-dd HH:mm', new Date()), selectedDate));
  }, [selectedDate, doctorAvailability]);

  const handleBookAppointment = () => {
    if (selectedSlot) {
      const formattedDate = format(selectedDate, 'yyyy-MM-dd');
      const fullSlot = `${formattedDate} ${selectedSlot}`;
      bookAppointment(fullSlot);
    } else {
      alert('Please select a slot');
    }
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <label>
        Select Date:
        <input
          type="date"
          value={format(selectedDate, 'yyyy-MM-dd')}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
        />
      </label>
      <br />
      <label>
        Select Available Slot:
        <select value={selectedSlot} onChange={(e) => setSelectedSlot(e.target.value)}>
          <option value="">Select...</option>
          {filteredAvailability.map((slot) => (
            <option key={slot} value={format(parse(slot, 'yyyy-MM-dd HH:mm', new Date()), 'HH:mm')}>
              {format(parse(slot, 'yyyy-MM-dd HH:mm', new Date()), 'hh:mm a')}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button onClick={handleBookAppointment}>Book Appointment</button>
    </div>
  );
};

export default PatientAppointment;
