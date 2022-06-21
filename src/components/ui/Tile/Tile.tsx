import { FunctionComponent } from 'react';
import { TileProps } from './Tile.interface';

const Tile: FunctionComponent<TileProps> = ({ title, description, imageUrl, thumbnail }) => {
  return (
    <article className="col-6 col-12-xsmall work-item">
      <a href={imageUrl} className="image fit thumb">
        <img src={thumbnail} alt={title} />
      </a>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default Tile;
