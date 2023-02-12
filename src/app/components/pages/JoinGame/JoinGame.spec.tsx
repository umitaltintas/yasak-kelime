import { render } from '@testing-library/react';

import JoinGame from './JoinGame';

describe('JoinGame', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<JoinGame />);
    expect(baseElement).toBeTruthy();
  });
});
