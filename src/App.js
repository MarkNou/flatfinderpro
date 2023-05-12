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
import mockApartments from './mockApartments';
import mockUsers from './mockUsers';

const App = () => {

const [apt, setApt] = useState(mockApartments)
const [user, setUser] = useState(mockUsers[0])
const createApt = (apt) => {
  console.log(apt)
}

  return (
    <>
      <Header user={user}/>
      <Routes>
        <Route path= "/" element= {<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path= "/apartmentindex" element= {<ApartmentIndex apt = {apt} />} />
        <Route path= "/apartmentshow/:id" element= {<ApartmentShow apt = {apt} />} />
        <Route path= "/apartmentnew" element= {<ApartmentNew createApt = {createApt}/>} />
        <Route path= "/apartmentedit" element= {<ApartmentEdit />} />
        <Route path= "/myapartments" element= {<ApartmentProtectedIndex user={user} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
