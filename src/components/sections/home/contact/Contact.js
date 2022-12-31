import React from "react";

import { Section } from "./Contact.styles";

import Button from "../../../button/Button";

const Contact = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <Section>
      <h3>Sign up for free trial and consultation</h3>
      <p>
        Ready to unleash potential and achieve process excellence? TechiLab
        helps you transform and succeed using technology, insights, and
        innovation.
      </p>
      <div
      //  onClick={() => openInNewTab("http://techilab.com/contact-us/")}
      >
        <Button>Get in touch</Button>
      </div>
    </Section>
  );
};

export default Contact;
