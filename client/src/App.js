
import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Resources from './Components/Resources';
import Footer from './Components/Footer';
import Home from './Components/Home';
import User from './Components/User';
import MyProfile from './Components/MyProfile';
import Subjects from './Components/Subject';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Paper from './Components/Paper';


function App() {
  const [profile, setProfile] = useState(false);
  const [userData, setUserData] = useState(null);
  const [data,setData] = useState({});

  return (
    <Router>
      <div className="App">
        <Navbar profile={profile} setProfile={setProfile}/>
        {/* <section className="offset"></section> */}
        <Routes>
          
          <Route path="/" element={<Home globalData = {data} setGlobalData={setData}/>} />


          <Route path="/Resources/:branch"  element = {<Resources globalData={data} />}/>
            
          
          <Route path="/Subjects/:branch/:year" element={<Subjects globalData={data}  profile={profile} setProfile={setProfile} /> }/>
            
          
          {profile&&<Route path="/Paper/:branch/:year/:subject" elements={<Paper profile={profile} />}/>}


          <Route path="/User" element={<User profile={profile} setProfile={setProfile} setUserData={setUserData}/>}/>
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// npx json-server --watch data/db.json --port 8000