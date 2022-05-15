import React, { useState } from "react";
import "./createEvent.css";
// import URL from "../../url";
// import db from "../../util/firebaseConnect.js";
// import { collection, addDoc, doc, getDocs, getDoc } from "firebase/firestore";
import EventDataService from "../../services/events.service";

const CreateEvent = (props) => {
  const [eventName, setEventName] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [eventDetails, setEventDetails] = useState("");
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const [eventAdded, setEventAdded] = useState(false);

  const onCreateEvent = async (e) => {
    e.preventDefault();

    // const eventRef =
    const event = {
      eventName,
      organizer,
      eventDetails,
      category,
      startDate,
      endDate,
      startTime,
      endTime,
      upVotesBy: [],
      downVotesBy: []
    };

    try {
      await EventDataService.addEvents(event);
    } catch (err) {}
    setEventAdded(true);
    props.eventAdded(eventAdded);

  };

  return (
    <div>
      <form onSubmit={onCreateEvent}>
        <div className="form1-item form">
          <div>
            <input
              type="text"
              placeholder="Event Name"
              required
              onChange={(event) => setEventName(event.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Organizer"
              required
              onChange={(event) => setOrganizer(event.target.value.toLowerCase())}
            />
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Event Details"
              required
              onChange={(event) => setEventDetails(event.target.value)}
            />
          </div>
          <div>
            <select name="category" id="category" placeholder="Category" onChange={(event) => setCategory(event.target.value)} required>
              <option value="" disabled selected>Select Category</option>
              <option value="Feature" >Feature</option>
              <option value="Tech">Tech</option>
            </select>
          </div>
        </div>
        <div className="form2-item">
          <div>
            <span> Start Date:</span>
            <input
              type="date"
              placeholder="Start Date"
              required
              onChange={(event) => setStartDate(event.target.value)}
            />
          </div>
          <div>
            <span> End Date: </span>
            <input
              type="date"
              placeholder="End Date"
              required
              onChange={(event) => {
                if (event.target.value < startDate) {
                  alert("End Date cannot be before Start Date");
                  event.target.value = "";
                } else {
                  return setEndDate(event.target.value);
                }
              }}
            />
          </div>
          <div>
            <span> Start Time: </span>
            <input
              type="time"
              placeholder="Start Time"
              required
              onChange={(event) => setStartTime(event.target.value)}
            />
          </div>
          <div>
            <span> End Time: </span>
            <input
              type="time"
              placeholder="End Time"
              required
              onChange={(event) => {
                if (endDate === startDate && event.target.value < startTime) {
                  alert("End Date cannot be before Start Date");
                  event.target.value = "";
                } else {
                  return setEndTime(event.target.value);
                }
              }}
            />
          </div>
          <div className="button-panel">
            <input
              type="submit"
              className="button"
              title="Create"
              value="Create Event"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
