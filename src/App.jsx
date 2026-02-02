import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import TalentsPage from './pages/TalentsPage';
//import MapPage form '';
//import TimelinePage form '';

import Header from './layouts/Header';
import Footer from './layouts/Footer';



function App() {

    return (
      <Router>
        <Header/>
        <Routes>
              <Route path="/talents" element={<TalentsPage/>} />
              <Route path="/" element={<HomePage/>} />
              <Route path="*" element={<ErrorPage/>} />
        </Routes>
        <Footer/>
      </Router>
    )
}

export default App;
