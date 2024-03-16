import { render } from '@testing-library/react';
import CitySearch from '../components/CitySearch';

describe('<CitySearch /> component', () => {
    test('renders text input', () => {
        const CitySearchComponent = render(<CitySearch />);
        const cityTextBox = CitySearchComponent.queryAllByRole('textbox');
        expect(cityTextBox).toBeInTheDocument();
        expect(cityTextBox).toHaveClass('city');
    });
});
