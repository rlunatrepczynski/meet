Feature: Specify Number of Events
    Scenario: Default Display of 32 Events
        Given a user has not specified a number of events.
        When the user views the events section.
        Then the user will see 32 events shown by default.

    Scenario: Change the Number of Events Displayed
        Given user has specified the number of events.
        When the user views the events section.
        Then the app displays the specific number of events the user requested.
