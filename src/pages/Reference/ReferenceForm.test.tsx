import { render } from '@testing-library/react';

import { ReferenceForm } from './ReferenceForm';

describe('ReferenceForm page', () => {

    test('should render component', () => {
        const { container } = render(<ReferenceForm />)

        expect(container).toBeInTheDocument();
    });

    test('should match snapshot', () => {
        const { container } = render(<ReferenceForm />);

        expect(container).toMatchSnapshot();
    });
});

