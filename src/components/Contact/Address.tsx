import { FunctionComponent } from 'react';

const Address: FunctionComponent = () => {
  return (
    <ul className="labeled-icons">
      <li>
        <h3 className="icon solid fa-home">
          <span className="label">Address</span>
        </h3>
        1234 Somewhere Rd.
        <br />
        No Way, 00000
        <br />
        Another Dimension
      </li>
      <li>
        <h3 className="icon solid fa-envelope">
          <span className="label">Email</span>
        </h3>
        <a href="mailto:hello@brianlusina.com">hello@brianlusina.com</a>
      </li>
    </ul>
  );
};

export default Address;
