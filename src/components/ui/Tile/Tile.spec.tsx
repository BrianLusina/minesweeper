import { render, screen } from '@testing-library/react';
import Tile from './Tile';

describe('Tile', () => {
  test('should render', () => {
    const title = 'Some Title';
    const description = 'Some Description';
    const imageUrl = 'https://someimageurl.png';
    const thumbnail = 'https://somethumbnail.png';

    const { container } = render(
      <Tile title={title} description={description} imageUrl={imageUrl} thumbnail={thumbnail} />,
    );

    expect(container).toMatchSnapshot();

    const titleElement = screen.getByText(title);
    const descriptionElement = screen.getByText(description);
    const imageElement = screen.getByAltText(title);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});
