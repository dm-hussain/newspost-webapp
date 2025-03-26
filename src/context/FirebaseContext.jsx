import { initializeApp } from 'firebase/app';
import { createContext, useContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, query, ref, set } from 'firebase/database';

import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  setDoc,
  getFirestore,
  getDoc,
  getDocs,
  where,
} from 'firebase/firestore';
import ShareBtn from '../components/ShareBtn';
const firebaseConfig = {
  apiKey: 'AIzaSyAfi72gNU3UpVAkSAph8u0mJLrUsr-speg',
  authDomain: 'news-app-9015b.firebaseapp.com',
  projectId: 'news-app-9015b',
  storageBucket: 'news-app-9015b.firebasestorage.app',
  messagingSenderId: '789420996485',
  appId: '1:789420996485:web:f24ac27fb77b16f2abb6ec',
  databaseURL: 'https://news-app-9015b-default-rtdb.firebaseio.com',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const firestoreDB = getFirestore(app);
const provider = new GoogleAuthProvider();

const firebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [loginData, setLoginData] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    ).then((res) => console.log(res));
  };

  const signinUser = () => {
    signInWithEmailAndPassword(auth, loginData.emailId, loginData.password)
      .then((res) => console.log('signin success'))
      .catch((error) => console.log(error));
  };

  const putData = (key, data) => set(ref(db, key), data);
  const [uniqueLink, setUniqueLink] = useState('');
  const handleNewsSubmit = async (headline, body, imgUrl, category) => {
    if (!auth.currentUser) return alert('You must be logged in!');

    const userId = auth.currentUser.uid;
    const userName = auth.currentUser.displayName || userId;

    try {
      // Add news to the "news" collection
      const newsRef = await addDoc(collection(firestoreDB, 'news'), {
        headline,
        body,
        category,
        userId,
        userName,
        imgUrl,
        createdAt: serverTimestamp(),
      });
      setUniqueLink(`https://postcardnews.netlify.app/news/${newsRef.id}`);
      console.log('link:', window.location.origin);
      // Add news to the user's profile in "users/{userId}/news"
      await setDoc(doc(firestoreDB, `users/${userName}/news`, newsRef.id), {
        headline,
        body,
        category,
        userId,
        userName,
        imgUrl,
        createdAt: serverTimestamp(),
      });

      alert('News posted successfully!');
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error posting news:', error);
    }
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const [loggedInData, setLoggedInData] = useState(null);

  const userLoginStatus = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setLoggedInData(user);
      } else {
        // User is signed out
        setLoggedInData(null);
      }
    });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // setLoggedInData({isLogged: false, userData: null})
        // Sign-out successful.
        setLoggedInData(null);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  // Get single news data
  const [showNews, setShowNews] = useState(null);
  const getNewsData = async ({ id }) => {
    const ref = doc(firestoreDB, 'news', id);

    const snap = await getDoc(ref);
    setShowNews(snap.data());
  };

  // Get All news data

  const [allUsersNews, setAllUsersNews] = useState(null);
  const getAllNewsData = async () => {
    try {
      const ref = await getDocs(collection(firestoreDB, 'news'));
      const allNewsData = ref.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllUsersNews(allNewsData);
    } catch (error) {
      console.log(error);
    }
  };

  // Get all users news by category:
  const [allNewsByCategory, setAllNewsByCategory] = useState(null);
  const getNewsByCategory = async (category) => {
    try {
      const ref = collection(firestoreDB, 'news');

      const q = query(ref, where('category', '==', category));

      const querySnap = await getDocs(q);

      const allNews = querySnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setAllNewsByCategory(allNews);
    } catch (error) {
      console.log(error);
    }
  };

  // Get All news made by logged-in user

  const [loggedInUsersAllNews, setLoggedInUsersAllNews] = useState(null);
  const getUserNews = async () => {
    try {
      const userId = auth.currentUser.uid;

      const q = query(
        collection(firestoreDB, 'news'),
        where('userId', '==', userId)
      );
      const querySnap = await getDocs(q);
      const usersNews = querySnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLoggedInUsersAllNews(usersNews);
    } catch (error) {
      // console.log(error);
    }
  };

 

  // Upload to imgur...............



  useEffect(() => {
    userLoginStatus();
  }, [loggedInData]);

  return (
    <firebaseContext.Provider
      value={{
        userData,
        setUserData,
        signupUser,
        loginData,
        setLoginData,
        signinUser,
        putData,
        signupWithGoogle,
        userLoginStatus,
        loggedInData,
        handleSignOut,
        handleNewsSubmit,
        getAllNewsData,
        allUsersNews,
        getUserNews,
        loggedInUsersAllNews,
        getNewsByCategory,
        allNewsByCategory,
        getNewsData,
        showNews,
        formSubmitted,
        setFormSubmitted,
        uniqueLink,
       
      }}
    >
      {children}
    </firebaseContext.Provider>
  );
};

export const useFirebaseContext = () => useContext(firebaseContext);
