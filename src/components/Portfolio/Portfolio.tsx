import { FunctionComponent } from 'react';
import Tile from '@components/ui/Tile';

const Portfolio: FunctionComponent = () => {
  return (
    <section id="two">
      <h2>Recent Work</h2>
      <div className="row">
        <Tile
          title="Magna sed consequat tempus"
          description="Lorem ipsum dolor sit amet nisl sed nullam feugiat."
          imageUrl="@images/fulls/01.jpg"
          thumbnail="@images/thumbs/01.jpg"
        />
      </div>
      <ul className="actions">
        <li>
          <a href="#" className="button">
            Full Portfolio
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
