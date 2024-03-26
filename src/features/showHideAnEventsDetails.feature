Feature: Show/Hide Event Details
    Scenario: Event Element is Collapsed by Default
        Given main page is open.
        When the app displays a list of events.
        Then the event details are hidden by default.

    Scenario: Expand an Event to See Details
        Given there is an event that has hidden details.
        When the user clicks on the event to show details.
        Then the app will display the details of the event.

    Scenario: Collapse an Event to Hide Details
        Given there is an event that has details displayed.
        When the user clicks on the event to hide the details.
        Then the app will hide the details of the event.
