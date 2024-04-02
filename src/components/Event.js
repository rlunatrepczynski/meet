import { useState } from "react";

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <li className="event">
            <h3>{event && event.summary}</h3>
            <p>{event && event.created}</p>
            <p>{event && event.location}</p>
            <button
                className="details-btn"
                onClick={() => { showDetails ? setShowDetails(false) : setShowDetails(true) }}>
                {showDetails ? 'hide details' : 'show details'}
            </button>
            {showDetails ? (
                <div className="details">
                    <h4>event details</h4>
                    <p>{event && event.description}</p>
                </div>)
                : null}
        </li>
    );
}

export default Event;
