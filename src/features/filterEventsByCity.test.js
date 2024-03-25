import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../mock-data';
import userEvent from '@testing-library/user-event';


const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
    //Scenario 1
    test('Show Upcoming Events from All Cities', ({ given, when, then }) => {
        given('the user has not searched for any city.', () => {
        });

        let AppComponent;
        when('the user opens the app.', () => {
            AppComponent = render(<App />);
        });

        then('the user should see a list of upcoming events.', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
            });

        });
    });

    //Scenario 2
    test('Display List of Suggestions for City Search', ({ given, when, then }) => {
        let AppComponent;
        given('main page is open.', () => {
            AppComponent = render(<App />);

        });

        let CitySearchDOM;
        when('user starts typing in the city textbox.', async () => {
            const user = userEvent.setup();
            const AppDOM = AppComponent.container.firstChild;
            CitySearchDOM = AppDOM.querySelector('#city-search');
            const citySearchInput = within(CitySearchDOM).queryByRole('textbox');
            await user.type(citySearchInput, "Berlin");

        });

        then('user should receive a list of cities (suggestions) that match what they typed.', async () => {
            const suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem');
            expect(suggestionListItems).toHaveLength(2);
        });
    });

    test('Select a City from Suggestions', ({ given, when, then }) => {
        given('user was typing “Berlin” in the city textbox, and the list of suggested cities is showing.', () => {

        });

        when('the user selects a city (e.g., “Berlin, Germany”) from the list.', () => {

        });

        then('their city should be changed to that city (i.e., “Berlin, Germany”), and the user should receive a list of upcoming events in that city.', () => {

        });
    });


});

