import { FunctionComponent } from 'react';
import Button from '../Button/Button';
import { BannerProps } from './Banner.interface';

const Banner: FunctionComponent<BannerProps> = ({ title, description, link }) => {
  const handleClick = () => {
    window.open(link);
  };

  return (
    <section id="one">
      <header className="major">
        <h2>{title}</h2>
      </header>
      <p>{description}</p>
      <ul className="actions">
        <li>
          <Button onClick={handleClick} text="Learn More" />
        </li>
      </ul>
    </section>
  );
};

export default Banner;
