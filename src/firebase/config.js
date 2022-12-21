import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC9gc6V2MGPSucw-NucTgUEJcIZoL_DPgg",
  authDomain: "olx-clone-a95d2.firebaseapp.com",
  projectId: "olx-clone-a95d2",
  storageBucket: "olx-clone-a95d2.appspot.com",
  messagingSenderId: "174206199892",
  appId: "1:174206199892:web:2acfd6f9b5160eeb18e5c1",
  measurementId: "G-DZVZ45KT0R"
};


  export default firebase.initializeApp(firebaseConfig)