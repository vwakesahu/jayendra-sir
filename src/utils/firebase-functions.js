import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

export const saveAllocation = async (allocation) => {
  const { date, medicine, timeSlot } = allocation;

  const allocationRef = doc(firestore, "allocations", date);
  const existingAllocation = await getDoc(allocationRef);

  if (existingAllocation.exists()) {
    const existingData = existingAllocation.data() || {};
    const existingMedicines = existingData.medicines || [];

    await setDoc(
      allocationRef,
      { medicines: [...existingMedicines, { medicine, timeSlot }] },
      { merge: true }
    );
  } else {
    await setDoc(allocationRef, { medicines: [{ medicine, timeSlot }] });
  }
};

export const getAllocationsForDate = async (date) => {
  const allocationRef = doc(firestore, "allocations", date);
  const allocationDoc = await getDoc(allocationRef);

  if (allocationDoc.exists()) {
    return allocationDoc.data().medicines || [];
  } else {
    return [];
  }
};

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

    return items.docs.filter((doc) => doc.id === date).map((doc) => doc.data());
  } catch (error) {
    console.error("Error getting availability: ", error);
    throw error;
  }
};
