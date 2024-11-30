import { render } from '@testing-library/react';
import { App } from './App';

describe('App component', () => {

  test('should render component', () => {
    const { container } = render(<App />)

    expect(container).toBeInTheDocument();
  });

  test('should match snapshot', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});