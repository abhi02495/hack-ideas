import React from "react";
import "./listEvents.css";
import Events from "./Events";

const ListEvents = ({ events }) => {

  return (
    <div>
      {events.map((item) => {

        return (
          <div key={item.id} className="event-item">
            <Events item={item}/>
          </div>
        );
      })}
    </div>
  );
};

export default ListEvents;
