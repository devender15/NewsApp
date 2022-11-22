import './App.css';
import LoadingBar from 'react-top-loading-bar';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


const App = ()=> {

  let pageSize = 15; // using this variable to change the number of news on one page

  // importing our api key from env file
  const api_key = process.env.REACT_APP_NEWS_API;

  const [progress, setprogress] = useState(0);

  const set_progress = (progress)=>{
    setprogress(progress)
  }

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color="#FF0000" progress={progress} height={3} shadow={true} />
          <Routes>
            <Route exact path="/" element={<News api_key={api_key} set_prog={set_progress}  key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
            <Route exact path="/business" element={<News api_key={api_key} set_prog={set_progress}  key="business" pageSize={pageSize} country="in" category="business"/>} /> exact
            <Route exact path="/entertainment" element={<News api_key={api_key} set_prog={set_progress}  key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
            <Route exact path="/general" element={<News api_key={api_key} set_prog={set_progress}  key="general" pageSize={pageSize} country="in" category="general"/>} />
            <Route exact path="/health" element={<News api_key={api_key} set_prog={set_progress}  key="health" pageSize={pageSize} country="in" category="health"/>} />
            <Route exact path="/science" element={<News api_key={api_key} set_prog={set_progress}  key="science" pageSize={pageSize} country="in" category="science"/>} />
            <Route exact path="/sports" element={<News api_key={api_key} set_prog={set_progress}  key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
            <Route exact path="/technology" element={<News api_key={api_key} set_prog={set_progress}  key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
}
export default App;