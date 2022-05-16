import React, { useEffect, useState } from "react";
import EventDataService from "../../services/events.service";
import { Icon } from "@iconify/react";
import { Redirect, Route } from 'react-router-dom';
import Hackathon from "./Hackathon";

const Events = ({ item }) => {
  const user = localStorage.getItem("user");
  const [upVoted, setUpVoted] = useState(false);
  const [downVoted, setDownVoted] = useState(false);

  const [countOfUpVotes, setCountOfUpVotes] = useState(0);
  const [countOfDownVotes, setCountOfDownVotes] = useState(0);

  const [isDeleted, setIsDeleted] = useState(false)

  const checkVote = async (id, action) => {
    const eventData = await EventDataService.getEvent(id);
    if (action === "upvote") {
      const getUpVotes = await eventData.get("upVotesBy");
      setCountOfUpVotes(getUpVotes.length);
      if (await getUpVotes?.includes(user)) {
        setUpVoted(true);
      } else {
        setUpVoted(false);
      }
    } else if (action === "downvote") {
      const getDownVotes = await eventData.get("downVotesBy");
      setCountOfDownVotes(getDownVotes.length);
      if (await getDownVotes?.includes(user)) {
        setDownVoted(true);
      } else {
        setDownVoted(false);
      }
    }
  };

  useEffect(() => {
    checkVote(item.id, "upvote");
    checkVote(item.id, "downvote");
  }, [upVoted, downVoted, item.id]);

  const addUpVote = async () => {
    const eventData = await EventDataService.getEvent(item.id);
    let getUpVotes = eventData.get("upVotesBy");
    let getDownVotes = eventData.get("downVotesBy");
    getUpVotes.push(user);
    await EventDataService.updateEvent(item.id, {
      ...eventData.data,
      upVotesBy: getUpVotes,
      downVotesBy: getDownVotes.filter((i) => i !== user),
    });
    setUpVoted(true);
    setDownVoted(false);
  };

  const addDownVote = async () => {
    const eventData = await EventDataService.getEvent(item.id);
    let getUpVotes = eventData.get("upVotesBy");
    let getDownVotes = eventData.get("downVotesBy");
    getDownVotes.push(user);
    await EventDataService.updateEvent(item.id, {
      ...eventData.data,
      upVotesBy: getUpVotes.filter((i) => i !== user),
      downVotesBy: getDownVotes,
    });
    setUpVoted(false);
    setDownVoted(true);
  };

  const deleteEvent = async () => {

    await EventDataService.deleteEvent(item.id)
    setIsDeleted(true);
  }

  

  return (
      <>
    {isDeleted ? <Hackathon user={localStorage.getItem('user')}/> :
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
        <strong>Organizer</strong>: {item.organizer.toUpperCase()}
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
      <span style={{ paddingTop: 10 }}>
        {upVoted ? (
          <>
            <Icon className="icon-style" icon="bx:upvote" color="green" />{" "}
            {countOfUpVotes}{" "}
          </>
        ) : (
          <>
            <Icon
              style={{ cursor: "pointer" }}
              className="icon-style"
              icon="bx:upvote"
              onClick={() => addUpVote(item.id)}
            />
            {countOfUpVotes}
          </>
        )}

        {downVoted ? (
            <>
          <Icon className="icon-style" icon="bx:downvote" color="red" />
          {countOfDownVotes}</>
        ) : (
            <>
          <Icon
            style={{ cursor: "pointer" }}
            className="icon-style"
            icon="bx:downvote"
            onClick={() => addDownVote(item.id)}
          />{countOfDownVotes}
          </>
        )}
      </span>
      {user === item.organizer.toLowerCase() ? <div style={{paddingTop: 20}}>
          <button style={{borderColor: "red", borderRadius: 10}} onClick={deleteEvent}>Delete</button>
      </div>: ""}
      
    </div>
    }</>
  );
        
};

export default Events;
