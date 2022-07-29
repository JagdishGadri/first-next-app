import React, { Fragment, useState } from "react";
import { buildFeedbackPath, extractFeedbackData } from "./api/feedback/index";

function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();
  function handleDetailView(id) {
    fetch(`api/feedback/${id}`)
      .then((res) => res.json())
      .then((data) => setFeedbackData(data.feedback));
  }
  return (
    <Fragment>
      {feedbackData && <>{feedbackData.email}</>}
      <ul>
        {props.feedbackData.map((item) => (
          <li key={item.id}>
            {item.feedback}
            <button onClick={handleDetailView.bind(null, item.id)}>
              Show more Details
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedbackData(filePath);
  return {
    props: {
      feedbackData: data,
    },
  };
}

export default FeedbackPage;
