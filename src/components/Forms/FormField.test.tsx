import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom'

import { FormField } from './FormField';

describe('FormField component', () => {
    const mockedOnChange = jest.fn();

    test('should render component', () => {
        const { container } = render(<FormField id='1' name='form-name' label='form label' type='text' value='text' required handleChange={mockedOnChange} />)

        expect(container).toBeInTheDocument();
    });

    test('should match snapshot', () => {
        const { container } = render(<FormField id='1' name='form-name' label='form label' type='text' value='text' required handleChange={mockedOnChange} />);

        expect(container).toMatchSnapshot();
    });

    test('should render the label', () => {
        const label = 'form label'
        render(<FormField id='1' name='form-name' label='form label' type='text' value='text' required handleChange={mockedOnChange} />)

        expect(screen.getByText(label)).toBeInTheDocument()
    });

    test('should find the input field', () => {
        render(<FormField id='1' name='form-name' label='form label' type='text' value='text' required handleChange={mockedOnChange} />)

        const input: HTMLInputElement = screen.getByTestId('input')

        expect(input.value).toBe('text')
    });
});

