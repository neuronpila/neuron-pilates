// Firebase 설정 - 본인 설정으로 교체 필요
const firebaseConfig = {
  apiKey: "AIzaSyAJslxytJtYOK-vVuIU8S8BCAa77CNatp4",
  authDomain: "neuron-pilates.firebaseapp.com",
  projectId: "neuron-pilates",
  storageBucket: "neuron-pilates.firebasestorage.app",
  messagingSenderId: "574648858795",
  appId: "1:574648858795:web:235c484775c74187115fee",
  measurementId: "G-CL5RXYDX77"
};

// Firebase 초기화
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, onSnapshot, query, where, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, doc, setDoc, getDoc, getDocs, addDoc, updateDoc, deleteDoc, onSnapshot, query, where, orderBy, ref, uploadBytes, getDownloadURL };
