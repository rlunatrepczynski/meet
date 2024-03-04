# Meet App

## Project Description
A serverless, progressive web application (PWA) with REACT using a test-driven development (TDD) technique.

## API Project
The application utilizes the Google Calendar API to fetch upcoming events.

## Key Features

### Filter Events by City
As a user, I should be able to filter events by city so that I can see only the events in that city.

#### Scenario 1: Show Upcoming Events from All Cities
- **Given:** The user has not searched for any city.
- **When:** The user opens the app.
- **Then:** The user should see a list of upcoming events.

#### Scenario 2: Display List of Suggestions for City Search
- **Given:** Main page is open.
- **When:** User starts typing in the city textbox.
- **Then:** User should receive a list of cities that match what they typed.

#### Scenario 3: Select a City from Suggestions
- **Given:** User was typing “Berlin” in the city textbox, and the list of suggested cities is showing.
- **When:** The user selects a city (e.g., “Berlin, Germany”) from the list.
- **Then:** Their city should be changed to that city (i.e., “Berlin, Germany”), and the user should receive a list of upcoming events in that city.

### Show/Hide Event Details
As a user, I should be able to show and hide event details so that I can see all events efficiently and when needed.

#### Scenario 1: Event Element is Collapsed by Default
- **Given:** Main page is open.
- **When:** The app displays a list of events.
- **Then:** The event details are hidden by default.

#### Scenario 2: Expand an Event to See Details
- **Given:** There is an event that has hidden details.
- **When:** The user clicks on the event to show details.
- **Then:** The app will display the details of the event.

#### Scenario 3: Collapse an Event to Hide Details
- **Given:** There is an event that has details displayed.
- **When:** The user clicks on the event to hide the details.
- **Then:** The app will hide the details of the event.

### Specify Number of Events
As a user, I should be able to specify the number of events displayed so that the user interface will display how many events I want to see at once.

#### Scenario 1: Default Display of 32 Events
- **Given:** A user has not specified a number of events.
- **When:** The user views the events section.
- **Then:** The user will see 32 events shown by default.

#### Scenario 2: Change the Number of Events Displayed
- **Given:** User has specified the number of events.
- **When:** The user views the events section.
- **Then:** The app displays the specific number of events the user requested.

### Use the App When Offline
As a user, I should be able to use the application when I'm offline so that I can use the event when I don't have an internet connection.

#### Scenario 1: Show Cached Data When Offline
- **Given:** User is offline and has used the data where data is stored locally.
- **When:** User interacts with the app without an internet connection.
- **Then:** The app will provide functionality offline and should display cached data.

#### Scenario 2: Show Error When User Changes Search Settings (City, Number of Events)
- **Given:** The user is on the search page for city and number of events.
- **When:** The user changes the search setting for city and number of events and clicks the search button.
- **Then:** The system should display an error message indicating the search settings cannot be changed.

### Add an App Shortcut to the Home Screen
As a user, I should be able to add a shortcut for the app to my home screen so that I can access the app quickly and with ease.

#### Scenario 1: Install Meet App as a Shortcut
- **Given:** The app is installed on the user's device.
- **When:** The user adds an app shortcut on the home screen.
- **Then:** The app shortcut should be visible on the home screen.

### Display Charts Visualizing Event Details
As a user, I should be able to see charts visualizing event details so that I can see and compare data for an event easily.

#### Scenario 1: Show a Chart with the Number of Upcoming Events in Each City
- **Given:** User is on the home screen.
- **When:** The user clicks to see a chart of events.
- **Then:** The app should display a chart of events, visualizing event details.
