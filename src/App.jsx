import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import TalentsPage1 from './pages/TalentsPage1';
import TalentsPage2 from './pages/TalentsPage2';
//import MapPage form '';
//import TimelinePage form '';
import ProgrammePage from './pages/ProgrammePage';

import Header from './layouts/Header';
import Footer from './layouts/Footer';



function App() {

    return (
      <Router>
        <Header/>
        <Routes>
          <Route path="/programme" element={<ProgrammePage/>} />
          <Route path="/talents1" element={<TalentsPage1 />} />
          <Route path="/talents2" element={<TalentsPage2/>} />
          <Route path="/" element={<HomePage/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
        <Footer/>
      </Router>
    )
}

export default App;
