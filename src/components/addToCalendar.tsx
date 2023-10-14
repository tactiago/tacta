"use client"

import React, { Component } from 'react'
import { Button } from './ui/button'

type AddToCalendarProps = {
  title: string
  location: string
  startDate: Date
  endDate: Date
  description: string
}

export default function AddToCalendar(props: AddToCalendarProps) {
  function saveCalInvite() {
    // Create the .ics URL
    let url = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      "DTSTART:" + formatDate(props.startDate),
      "DTEND:" + formatDate(props.endDate),
      "SUMMARY:" + props.title,
      "DESCRIPTION:" + props.description,
      "LOCATION:" + props.location,
      "BEGIN:VALARM",
      "TRIGGER:-PT2H",
      "REPEAT:1",
      "ACTION:DISPLAY",
      "DESCRIPTION:" + props.title,
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\n");

    window.open(encodeURI("data:text/calendar;charset=utf8," + url));
  }

  function formatDate(dateString: string | Date) {
    let dateTime = new Date(dateString);
    return [
      dateTime.getUTCFullYear(),
      pad(dateTime.getUTCMonth() + 1),
      pad(dateTime.getUTCDate()),
      "T",
      pad(dateTime.getUTCHours()),
      pad(dateTime.getUTCMinutes()) + "00Z"
    ].join("");
  }

  function pad(num: number) {
    // Ensure date values are double digits
    return num < 10 ? "0" + num : num;
  }

  return (
    <Button className="text-white rounded-full" onClick={() => { saveCalInvite() }}>
      Adicionar no meu calendário
    </Button>
  )
}