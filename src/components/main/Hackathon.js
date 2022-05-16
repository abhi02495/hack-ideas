import CreateEvent from "./CreateEvent";
import { useEffect, useState } from "react";
import EventDataService from "../../services/events.service";
import "./hackathon.css";
import ListEvents from "./ListEvents";
import Login from "../login/Login";
import cry from "../../common/images-svg/cry.png";

const Hackathon = (props) => {
  const [events, setEvents] = useState([]);
  const [isEventAdded, setIsEventAdded] = useState();
  const [isLoggedOut, setLoggedOut] = useState(false);

  const onEventAddition = (isAdded) => {
    console.log("is hit");
    setIsEventAdded(true);
  };

  const getEvents = async () => {
    const data = await EventDataService.getAllEvent();
    console.log(data.docs);
    setEvents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const onLogOutHandler = async () => {
    localStorage.removeItem("user");
    setLoggedOut(true);
  };

  useEffect(() => {
    try {
      getEvents();
    } catch (err) {
      console.log(err);
    }
  }, [isEventAdded]);

  

  if (isLoggedOut) {
    return <Login />;
  }

  return (
    <div>
      <div className="split-createEvent left">
        <div className="event-div">
          <h5>
            {" "}
            Hi <strong>{props.user.toUpperCase()}</strong>, Create your own
            Event here!!
          </h5>

          <CreateEvent eventAdded={onEventAddition} />
        </div>
      </div>
      <div className="split-right-createEvent right">
        <div className="listEvent-space">
          <button className="logoutBtn" onClick={onLogOutHandler} data-testid ="logoutButton">
            {" "}
            Log Out{" "}
          </button>
        </div>
        {events.length === 0 ? setInterval(()=>{
          <div>
            <div className="no-events" >
              <h3> Sorry, No Upcoming Events!!</h3>
            </div>{" "}
            <div className="no-events">
            <img src={cry} height="400px" width="400px" alt="" />
            </div>
            
          </div>
        }, 1000) : (
          <ListEvents events={events} />
        )}
      </div>
    </div>
  );
};

export default Hackathon;
