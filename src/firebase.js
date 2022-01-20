// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";

// FIREBASE KEY
const firebaseConfig = {
  apiKey: "AIzaSyCMfIL5Hg7yaULmya3dHYKs4sJcdaOFHuU",
  authDomain: "ocp14-65291.firebaseapp.com",
  projectId: "ocp14-65291",
  storageBucket: "ocp14-65291.appspot.com",
  messagingSenderId: "977104145774",
  appId: "1:977104145774:web:a6f06f1d79a7f3eef5857f",
};

// FIREBASE INIT
initializeApp(firebaseConfig);

// DATABASE LOG
export const db = getFirestore();

// FIRESTORE COLLECTION
const employeesCollectionRef = collection(db, "employees");

// EXPORTED FUNCTION TO ADD A NEW EMPLOYEE
export const createEmployee = async (
  firstName,
  lastName,
  birthDate,
  startDate,
  street,
  city,
  zipCode,
  selectedOptionDepartement,
  selectedOptionState
) => {
  await addDoc(employeesCollectionRef, {
    firstName: firstName,
    lastName: lastName,
    birthDate: birthDate.toString(),
    startDate: startDate.toString(),
    street: street,
    city: city,
    usState: selectedOptionState.value,
    zipCode: zipCode,
    departement: selectedOptionDepartement.label,
  });
};

// EXPORTED FUNCTION TO DISPLAY ALL EMPLOYEES
export const getEmployees = async (setEmployees) => {
  const data = await getDocs(employeesCollectionRef);
  setEmployees(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
};
