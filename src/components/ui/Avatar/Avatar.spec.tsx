import { render } from '@testing-library/react';
import Avatar from './Avatar';

describe('Avatar', () => {
  it('should render', () => {
    const url = 'https://avatar.png';

    const { container } = render(<Avatar url={url} />);

    expect(container).toMatchSnapshot();
  });
});
