import { render } from '@testing-library/react';

import NewGame from './NewGame';

describe('NewGame', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewGame />);
    expect(baseElement).toBeTruthy();
  });
});
