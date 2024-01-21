import {
    collection,
    doc,
    getDocs,
    orderBy,
    query,
    setDoc,
  } from "firebase/firestore";
  import { firestore } from "../firebase.config";
  
  // Saving new Item
  export const saveItem = async (data) => {
    try {
      const docRef = doc(firestore, "availability", `${data.date}`);
      await setDoc(docRef, data, { merge: true });
      console.log("Document successfully written!");
    } catch (error) {
      console.error("Error writing document: ", error);
      throw error;
    }
  };
  
  // Get all availability for a specific date
  export const getAvailabilityForDate = async (date) => {
    try {
      const items = await getDocs(
        query(collection(firestore, "availability"), orderBy("date"))
      );
  
      return items.docs
        .filter((doc) => doc.id === date)
        .map((doc) => doc.data());
    } catch (error) {
      console.error("Error getting availability: ", error);
      throw error;
    }
  };
  