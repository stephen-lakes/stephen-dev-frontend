import React from "react";
import ContactForm from "../components/contact";
import PageMeta from "../components/pageMeta";

const Contact: React.FC = () => {
  return (
    <>
      <PageMeta title="Stephen Oluyomi - Contact me" favicon="" />
      <ContactForm />
    </>
  );
};

export default Contact;
