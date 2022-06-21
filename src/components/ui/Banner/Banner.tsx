import { FunctionComponent } from 'react';
import { BannerProps } from './Banner.interface';

const Banner: FunctionComponent<BannerProps> = ({ title, description, link }) => {
  return (
    <section id="one">
      <header className="major">
        <h2>{title}</h2>
      </header>
      <p>{description}</p>
      <ul className="actions">
        <li>
          <a href={link} className="button">
            Learn More
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Banner;
