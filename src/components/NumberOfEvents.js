import React, { useState } from "react";

const NumberOfEvents = ({ setNumberOfEvents, setErrorAlert }) => {
    const [eventNumber, setEventNumber] = useState('32');

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setEventNumber(value);

        let infoText;
        if (isNaN(value) || value <= 0) {
            infoText = "Only positive numbers are allowed";
            setErrorAlert(infoText);
        } else {
            infoText = "";
            setErrorAlert("");
            setNumberOfEvents(value);
        }
    };

    return (
        <div id="number-of-events">
            <input
                type="text"
                value={eventNumber}
                onChange={handleInputChanged}
            />
        </div>
    );
};

export default NumberOfEvents;
