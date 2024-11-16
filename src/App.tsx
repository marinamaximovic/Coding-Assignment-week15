import { useState } from "react";
import Header from "./Header";
import AppointmentList from "./AppointmentList";
import { appointments as initialAppointments } from "./testData";
import { Appointment } from "./testData"; //importing the appointment type

const App = () => {
  //state for the list of appointments
  const [appointments, setAppointments] =
    useState<Appointment[]>(initialAppointments);

  //this is function for adding a new appointment
  const addAppointment = () => {
    const newAppointment: Appointment = {
      id: appointments.length + 1,
      clientName: "New Client",
      date: "2024-12-01",
      time: "2:00 PM",
      type: "Consultation",
      completed: false,
    };
    setAppointments([...appointments, newAppointment]); //add the new appointment to the array
  };

  //this is function to delete an appointment by id
  const deleteAppointment = (id: number) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  };

  //function to update the 'completed' status of an appointment by id
  const updateAppointment = (id: number) => {
    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, completed: !appointment.completed }
          : appointment
      )
    );
  };

  //this will render header, add appointment button and appointment list
  return (
    <div>
      <Header />
      <div style={{ margin: "20px" }}>
        <button onClick={addAppointment}>Add Appointment</button>
      </div>
      <AppointmentList
        appointments={appointments} //passing the list of appointments to the appointment list component
        deleteAppointment={deleteAppointment} //passing the delete function
        updateAppointment={updateAppointment} //passing the update function
      />
    </div>
  );
};

export default App;
