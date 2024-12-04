import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom'

import { Title } from './Title';

describe('Title component', () => {

    test('should render component', () => {
        const { container } = render(<Title />)

        expect(container).toBeInTheDocument();
    });

    test('should match snapshot', () => {
        const { container } = render(<Title />);

        expect(container).toMatchSnapshot();
    });

    test('should render default title text', () => {
        render(<Title />);
        const title = 'Referencing form'
        const heading = screen.getByTestId('heading')

        expect(heading.textContent).toBe(title)
    });

    test('should render title text', () => {
        const title = 'Different title'
        render(<Title title={title} />);

        const heading = screen.getByTestId('heading')

        expect(heading.textContent).toBe(title)
    });
});

