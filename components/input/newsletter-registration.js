import classes from "./newsletter-registration.module.css";
import { useRef } from "react";

function NewsletterRegistration() {
  const newSletterInputRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();
    const enteredEmail = newSletterInputRef.current.value;
    console.log("enteredEmail", enteredEmail);

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify(enteredEmail),
      headers: {
        "Content-Type": "appilication/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log("recievedEmailData", data));
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={newSletterInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
