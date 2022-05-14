import CreateEvent from "./CreateEvent";
import { useEffect, useState } from "react";
import EventDataService from "../../services/events.service";
import './hackathon.css';
import ListEvents from "./ListEvents";

const Hackathon = (props) => {
  const [events, setEvents] = useState([]);
  const [isEventAdded, setIsEventAdded] = useState();

  const onEventAddition = (isAdded) => {
    console.log("is hit");
    setIsEventAdded(true);
  };

  useEffect(() => {
    try {
    getEvents();
      
    } catch (err) {
      console.log(err);
    }

  }, [isEventAdded]);

  const getEvents = async () => {
    const data = await EventDataService.getAllEvent();
    console.log(data.docs);
    setEvents(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    
  }

  return (
    <div>
      <div className="split-createEvent left">
        <div
          style={{
            justifyContent: "center",
            marginTop: "1rem",
            marginLeft: "2rem",
          }}
        >
          <h5>
            {" "}
            Hi <strong>{props.user}</strong>, Create your own Event here!!
          </h5>

          <CreateEvent eventAdded={onEventAddition} />
        </div>
      </div>
      <div className="split-right-createEvent right">
          <ListEvents events={events}/>
      </div>
    </div>
  );
};

export default Hackathon;
