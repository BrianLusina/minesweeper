import Button from '@components/ui/Button';
import { isValidEmail } from '@utils';
import { FunctionComponent, useState, FormEvent } from 'react';

const ContactForm: FunctionComponent = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const isValid = (): boolean => {
    return isValidEmail(email) && name !== '' && message !== '';
  };

  const onSubmit = () => {
    //
  };

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <div className="row gtr-uniform gtr-50">
          <div className="col-6 col-12-xsmall">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-6 col-12-xsmall">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-12">
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
      </form>
      <ul className="actions">
        <li>
          <Button type="submit" onClick={onSubmit} text="Send message" disabled={!isValid()} />
        </li>
      </ul>
    </>
  );
};

export default ContactForm;
