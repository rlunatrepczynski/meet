meet App

**Project Description**
A serverless, progressive web application(PWA) with REACT using a test-driven development(TDD) technique.

**The API project uses
Application uses the Google Calendar API to fetch upcoming events

**Key Features**
***Filter Events by City***
  As a user,
  I should be able to filter events by city
  So that I can see only the events in that city

  Scenario 1: When user has not search for a specific city, show upcoming events from all cities.
  Given-The user has not searched for any city
  When-The user opens the app
  Then-The user should see a list of upcoming events

  Scenario 2: User should see a list of suggestions when they search for a city.
  Given-Main page is open
  When-User starts typing in the city textbox
  Then-User should receive a list of cities that match what they typed

  Scenario 3: User can select a city from a suggested list
  Given-User was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
  When-The user selects a city (e.g., “Berlin, Germany”) from the list;
  Then-Their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.

  ***Show/Hide Event Details***
  As a user
  I should be able to show and hide event details
  So that I can see all events efficiently and when needed

  Scenario 1: An event element is collapsed by default
  Given-Main page is open
  When-The app displays a list of events
  Then-The event details are hidden by default

  Scenario 2: User can expand an event to see details
  Given-There is an event that has hidden details
  When-The user clicks on the event to show details
  Then-The app will display the details of the event

  Scenario 3: User can collapse an event to hide details
  Given-There is an event that has details displayed
  When-The user clicks on the event to hide the details
  Then-The app will hide the details of the event

  ***Specify Number of Events***
  As a user
  I should be able to specify the number of events displayed
  So that the user interface will display how many events I want to see at once

  Scenario 1: When user hasn't speciifed a number, 32 events are shown by default
  Given-A user has not specified a number of events
  When-The user views the events section
  Then User will see 32 events shown by default

  Scenario 2: User can change the number of events displayed
  Given-User has specified the number of events
  When-The user views the events section
  Then-The app displays the specific number of events the user requested

  ***Use the App When Offline***
  As a user
  I should be able to use the application when I'm offline
  So that I can use the event when I don't have internet connection

  Scenario 1: Show cached data when there's no internet connection
  Given-User is offline and has used the data where data is stored locally
  When-User intercts with the app without internet connection
  Then-The app will provide functionality offline and should display cached data

  Scenario 2: Show error when user changes search settings(city, number of events)
  Given-The user is on the search page for city and number of events
  When-The user changes the search setting for city and number of events and clicks the search button
  Then-The system should display an error message indicating the search settings cannot be changed

  ***Add an App Shortcut to the Home Screen***
  As a user
  I should be able to add a shortcut for the app to my home screen
  So that I can access the app quickly and with ease

  Scenario 1: User can install the meet app as a shortcut on their device home screen
  Given-The app is installed on the user's device
  When-The user adds an app shortcut on the home screen
  Then-The app shorcut should be visible on the home screen

  ***Display Charts Visualizing Event Details***
As a user
I should be able to see charts visualizing event details
So that I can see and compare data for an event easily

Scenario 1: Show a chart with a number of upcoming events in each city
Given-User is on the home screen
When-The user clicks to see a chart of events
Then-The app should display a chart of events, visualizing event details




