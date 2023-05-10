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




const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path= "/" element= {<Home />} />
        <Route path= "/apartmentindex" element= {<ApartmentIndex />} />
        <Route path= "/apartmentshow" element= {<ApartmentShow />} />
        <Route path= "/apartmentnew" element= {<ApartmentNew />} />
        <Route path= "/apartmentedit" element= {<ApartmentEdit />} />
        <Route path= "/apartmentprotectedindex" element= {<ApartmentProtectedIndex />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
