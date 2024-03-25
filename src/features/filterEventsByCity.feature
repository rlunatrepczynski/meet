Feature: Filter Events by City
    Scenario: Show Upcoming Events from All Cities
        Given the user has not searched for any city.
        When the user opens the app.
        Then the user should see a list of upcoming events.

    Scenario: Display List of Suggestions for City Search
        Given main page is open.
        When user starts typing in the city textbox.
        Then user should receive a list of cities (suggestions) that match what they typed.

    Scenario: Select a City from Suggestions
        Given user was typing “Berlin” in the city textbox, and the list of suggested cities is showing.
        When the user selects a city (e.g., “Berlin, Germany”) from the list.
        Then their city should be changed to that city (i.e., “Berlin, Germany”), and the user should receive a list of upcoming events in that city.
