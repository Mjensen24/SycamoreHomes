// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mnqlpbbe");
//   if (state.succeeded) {
//       return <p>Thanks for joining!</p>;
//   }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email"></label>
      <input
        placeholder="Email"
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <input
        placeholder="Full Name"
        id="name"
        type="name" 
        name="name"
      />
      <ValidationError 
        prefix="name" 
        field="name"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Personal message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default ContactForm;