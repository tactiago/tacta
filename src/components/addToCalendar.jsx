import { Button } from "./ui/button";

export default function AddToCalendarButton() {
  const calendarEvent = {
    title: 'My Event',
    location: 'Somewhere',
    startDate: new Date(2022, 11, 24, 10, 30),
    endDate: new Date(2022, 11, 24, 12, 30),
    timeZone: 'Asia/Kolkata',
    notes: 'Some notes about the event',
  };

  const calendarUrl = encodeURIComponent(
    `BEGIN:VCALENDAR
    VERSION:2.0
    BEGIN:VEVENT
    UID:${calendarEvent.title}
    DTSTAMP:${new Date().toISOString()}
    DTSTART:${calendarEvent.startDate.toISOString()}
    DTEND:${calendarEvent.endDate.toISOString()}
    SUMMARY:${calendarEvent.title}
    LOCATION:${calendarEvent.location}
    DESCRIPTION:${calendarEvent.notes}
    END:VEVENT
    END:VCALENDAR`
  );    

    return (
      <Button className="text-white rounded-full">
        <a href={`data:text/calendar;charset=utf8,${calendarUrl}`} download="evento_tacta.ics" className="w-full h-full flex text-center items-center">
          Adicionar no meu calendário
        </a>
      </Button>
    );
}