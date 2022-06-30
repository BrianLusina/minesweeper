import { render, screen } from '@testing-library/react';
import Banner from './Banner';

describe('Banner', () => {
  it('should render', () => {
    const title = 'Banner Title';
    const description = 'Banner description';
    const bannerLink = 'https://bannerlink.com';

    const { container } = render(
      <Banner title={title} description={description} link={bannerLink} />,
    );

    expect(container).toMatchSnapshot();

    const titleElement = screen.getByText(title);
    const descriptionElement = screen.getByText(description);

    expect(descriptionElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
  });
});
