import React from "react";

const ListEvents = ({ events }) => {
  return (
    <div>
      {events.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              height: "auto",
              width: "90%",
              backgroundColor: "#fff",
              display: "flex",
              margin: "auto",
              borderRadius: "10px",
              marginTop: "2%"
            }}
          >
            <div
              style={{
                padding: 20,
              }}
            >
              <h2>
                {" "}
                <strong>{item.eventName}</strong>
              </h2>
              <h6> {item.eventDetails}</h6>
              <h6>
                {" "}
                <strong>Organizer</strong>: {item.organizer}
              </h6>

              <h6>
                {" "}
                <strong>Category</strong>: {item.category}
              </h6>
              <h6>
                {" "}
                <strong>Start</strong>: {item.startDate + " " + item.startTime}{" "}
              </h6>
              <h6>
                {" "}
                <strong>End</strong>: {item.endDate + " " + item.endTime}{" "}
              </h6>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListEvents;
