import { render } from '@testing-library/react';

import BrandHeader from './BrandHeader';

describe('BrandHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BrandHeader />);
    expect(baseElement).toBeTruthy();
  });
});
