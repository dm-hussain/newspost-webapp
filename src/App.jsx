import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { FirebaseProvider } from './context/FirebaseContext';
import { useState } from 'react';
 

function App() {

  const[toggleNav, setToggleNav]= useState(false)


  return (
    <FirebaseProvider>
      <Header toggleNav={toggleNav} setToggleNav={setToggleNav} />
      <Outlet context={{toggleNav, setToggleNav}} />
      <Footer />
    </FirebaseProvider>
  );
}

export default App;
