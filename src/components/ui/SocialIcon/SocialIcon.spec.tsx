import { render, screen } from '@testing-library/react';
import SocialIcon from './SocialIcon';

describe('SocialIcon', () => {
  it('should render', () => {
    const name = 'Twitter';
    const link = 'https://twitter.com/usesrname';
    const icon = 'twitter';

    const { container } = render(<SocialIcon name={name} link={link} icon={icon} />);

    const nameElement = screen.getByText(name);

    expect(container).toMatchSnapshot();

    expect(nameElement).toBeInTheDocument();
  });
});
