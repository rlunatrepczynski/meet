import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, waitFor, within } from '@testing-library/react';
import App from '../App';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
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

    test('Display List of Suggestions for City Search', ({ given, when, then }) => {
        given('main page is open.', () => {

        });

        when('user starts typing in the city textbox.', () => {

        });

        then('user should receive a list of cities that match what they typed.', () => {

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

