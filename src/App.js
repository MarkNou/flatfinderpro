import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import ApartmentIndex from './pages/ApartmentIndex';
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew' 
import ApartmentEdit from './pages/ApartmentEdit'
import ApartmentProtectedIndex from './pages/ApartmentProtectedIndex'
import NotFound from './pages/NotFound'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import { useState } from 'react';
import { useEffect } from 'react';
import mockApartments from './mockApartments';

const App = () => {

const [apt, setApt] = useState(mockApartments)


useEffect(() => {
  readApt();
}, []);

const readApt = () => {
  fetch("http://localhost:3000/apartments")
    .then((response) => response.json())
    .then((payload) => {
      setApt(payload);
    })
    .catch((error) => console.log(error));
};
const createApt = (apt) => {
  fetch("http://localhost:3000/apartments", {
    body: JSON.stringify(apt),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then((response) => response.json())
    .then((payload) => readApt())
    .catch((errors) => console.log("Cat create errors:", errors));
};
const updateApt = (apt, id) => {
  fetch(`http://localhost:3000/apartments/${id}`, {
    body: JSON.stringify(apt),
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
  })
    .then((response) => response.json())
    .then(() => readApt())
    .catch((error) => console.log("Updated errors:", error));
};

const deleteApt = (id) => {
  fetch(`http://localhost:3000/apartments/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((payload) => readApt())
    .catch((errors) => console.log("delete errors:", errors));
};


  return (
    <>
      <Header />
      <Routes>
        <Route path= "/" element= {<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path= "/apartmentindex" element= {<ApartmentIndex apt = {apt} />} />
        <Route path= "/apartmentshow/:id" element= {<ApartmentShow apt = {apt} deleteApt={deleteApt} />} />
        <Route path= "/apartmentnew" element= {<ApartmentNew createApt = {createApt}/>} />
        <Route path= "/apartmentedit/:id" element= {<ApartmentEdit apt={apt} updateApt={updateApt}/>} />
        <Route path= "/myapartments" element= {<ApartmentProtectedIndex />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
