import db from "../util/firebaseConnect.js";

import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
} from "firebase/firestore";

const eventCollectionRef = collection(db, "events");
class EventDataService {
    addEvents = (newEvent) => {
        return addDoc(eventCollectionRef, newEvent);
    }

    updateEvent = (id, updatedEvent) => {
        const eventDoc = doc(db, "events", id);
        return updateDoc(eventDoc, updatedEvent);
    }

    deleteEvent = (id) => {
        const eventDoc = doc(db, "events", id);
        return deleteDoc(eventDoc);
    }

    getAllEvent = () => {
        return getDocs(eventCollectionRef);
    }

    getEvent = (id) => {
        const eventDoc = doc(db, "events", id);
        return getDoc(eventDoc);
    }
}

export default new EventDataService();