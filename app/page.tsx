'use client'
import AppointmentForm from "@/components/Appointment";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import { useEffect, useState } from "react";


export default function Home() {
  const [events, setEvents] = useState<any>([]);


  useEffect(()=>{
    setEvents(localStorage.getItem('appointments') ?? []);
  },[]);

  console.log(events);


  const handleSchedule = ({date,time}:{date:any,time:any}) => {
    const newEvent = {
      title: 'Appointment',
      start: new Date(`${date}T${time}`),
      end: new Date(`${date}T${time}`),
    }; 
    const existingEvent = events.find((event:any) => newEvent.start.getTime() == event.start.getTime());
    if (existingEvent) {
      alert('An appointment already exists at this time. Please select a different time.');
      return;
    }
    setEvents([...events, newEvent]);
    // Update localStorage with the updated list of appointments
    localStorage.setItem('appointments', JSON.stringify([...events, newEvent]));

    alert("Appoitment booked");
  };

  return (
    <div>
      <h1>Calendar App</h1>
      <AppointmentForm onSchedule={handleSchedule} />
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
      />
    </div>
  );
};

