import { useRef, useEffect, useState } from "react";

export default function Home() {
  const emailRef = useRef();
  const feedbackRef = useRef();
  const [feedbackData, setFeedbackData] = useState();

  function submitHandler(event) {
    event.preventDefault();

    const eneteredEmail = emailRef.current.value;
    const eneteredFeedback = feedbackRef.current.value;

    const reqBody = {
      email: eneteredEmail,
      feedback: eneteredFeedback,
    };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function showFeedbackHandler(event) {
    event.preventDefault();

    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => setFeedbackData(data.feedback));
  }

  return (
    <div>
      <h1>HomePage</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">Feedback</label>
          <textarea id="feedback" row="5" ref={feedbackRef}></textarea>
        </div>
        <button onClick={submitHandler}>Submit Feedback</button>
        <button onClick={showFeedbackHandler}>Show Feedback</button>
        {feedbackData ? (
          <ul>
            {feedbackData.map((item) => (
              <li key={item.id}>{item.feedback}</li>
            ))}
          </ul>
        ) : null}
      </form>
    </div>
  );
}
