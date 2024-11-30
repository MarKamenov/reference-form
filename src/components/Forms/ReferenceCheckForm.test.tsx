import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom'

import { ReferenceCheckForm } from './ReferenceCheckForm';

describe('FormField component', () => {

    test('should render component', () => {
        const { container } = render(<ReferenceCheckForm />)

        expect(container).toBeInTheDocument();
    });

    test('should match snapshot', () => {
        const { container } = render(<ReferenceCheckForm />);

        expect(container).toMatchSnapshot();
    });

    test('has correct input value', () => {
        render(<ReferenceCheckForm />)

        expect(screen.getByTestId('form')).toHaveFormValues({
            firstName: '',
            lastName: '',
            currentAddress: '',
            name: '',
            startDate: '',
            endDate: ''

        })
    })
});

