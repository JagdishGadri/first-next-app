import React, { Fragment } from "react";
import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { useRouter } from "next/router";

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();
  const getFilteredEvents = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <Fragment>
      <EventsSearch onSearch={getFilteredEvents} />
      <EventList items={events} />
    </Fragment>
  );
}

export default AllEventsPage;
