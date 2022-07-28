import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { getFilteredEvents } from "../../helpers/api-utils";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";

function FilteredEventsPage(props) {
  const router = useRouter();
  const [fetchedEvents, setFetchedEvents] = useState();
  const filteredDetails = router.query.slug;

  const fetcher = async (url) => {
    const res = await fetch(url);
    return await res.json();
  };

  const { data, error } = useSWR(
    "https://next-udemy-first-default-rtdb.firebaseio.com/events.json",
    fetcher
  );

  useEffect(() => {
    if (data) {
      const events = [];
      for (const key in data) {
        events.push({
          id: key,
          ...data[key],
        });
      }
      setFetchedEvents(events);
    }
  }, [data]);

  if (!fetchedEvents) {
    return <p className="center">Loading...</p>;
  }

  const filterYear = filteredDetails[0];
  const filterMonth = filteredDetails[1];

  const numYear = +filterYear;
  const numMonth = +filterMonth;
  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12 ||
    error
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Not a valid filter.Please try different filter.</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  const filteredEvents = fetchedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    );
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />;
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const filteredDetails = params.slug;

//   const filterYear = filteredDetails[0];
//   const filterMonth = filteredDetails[1];

//   const numYear = +filterYear;
//   const numMonth = +filterMonth;
//   if (
//     isNaN(numMonth) ||
//     isNaN(numYear) ||
//     numYear > 2030 ||
//     numYear < 2021 ||
//     numMonth < 1 ||
//     numMonth > 12
//   ) {
//     return {
//       props: {
//         hasError: true,
//       },
//       notFound: true,
//       redirect: {
//         destination: "/errors",
//       },
//     };
//   }
//   const filteredEvents = await getFilteredEvents({
//     year: numYear,
//     month: numMonth,
//   });
//   return {
//     props: {
//       events: filteredEvents,
//       filterData: {
//         year: numYear,
//         month: numMonth,
//       },
//     },
//   };
// }
export default FilteredEventsPage;
