import React from "react";
import { buildFeedbackPath, extractFeedbackData } from "./api/feedback";

function FeedbackPage(props) {
  return (
    <div>
      <ul>
        {props.feedbackData.map((item) => (
          <li>{item.feedback}</li>
        ))}
      </ul>
    </div>
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
