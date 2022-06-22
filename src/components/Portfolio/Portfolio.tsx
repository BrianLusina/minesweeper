import { FunctionComponent } from 'react';
import Tile from '@components/ui/Tile';
import Button from '@components/ui/Button';
import defaultImage from '@images/fulls/01.jpg';
import defaultThumbnail from '@images/thumbs/01.jpg';

const Portfolio: FunctionComponent = () => {
  const handleSeeMore = (): void => {
    // if (hasNextPage) {
    //   fetchedSize += currentSize;
    //   setCurrentSize(fetchedSize);
    //   fetchMore({
    //     variables: {
    //       first: fetchedSize,
    //     },
    //   });
    // }
  };

  return (
    <section id="two">
      <h2>Recent Work</h2>
      <div className="row">
        <Tile
          title="Magna sed consequat tempus"
          description="Lorem ipsum dolor sit amet nisl sed nullam feugiat."
          imageUrl={defaultImage}
          thumbnail={defaultThumbnail}
        />
      </div>
      <ul className="actions">
        <li>
          <Button onClick={handleSeeMore} text="Full Portfolio" />
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
