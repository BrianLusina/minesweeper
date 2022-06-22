import { FunctionComponent } from 'react';
import Address from './Address';
import ContactForm from './ContactForm';

const Contact: FunctionComponent = () => {
  return (
    <section id="three">
      <h2>Get In Touch</h2>
      <p>Want to reach out and talk about robots, AI and the universe? Oh and games? Drop a line</p>
      <div className="row">
        <div className="col-8 col-12-small">
          <ContactForm />
        </div>
        <div className="col-4 col-12-small">
          <Address />
        </div>
      </div>
    </section>
  );
};

export default Contact;
