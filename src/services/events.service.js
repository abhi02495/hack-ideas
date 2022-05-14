import db from "../util/firebaseConnect.js";

import {
  collection,
  getDocs,
//   getDoc,
  addDoc,
//   updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const eventCollectionRef = collection(db, "events");
class EventDataService {
    addEvents = (newEvent) => {
        return addDoc(eventCollectionRef, newEvent);
    }

    deleteEvent = (id) => {
        const eventDoc = doc(db, "events", id);
        return deleteDoc(eventDoc);
    }

    getAllEvent = () => {
        return getDocs(eventCollectionRef);
    }
}

export default new EventDataService();