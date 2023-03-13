import './App.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from './components/Search';
import Pagination from './components/Pagination';
import Stories from './components/Stories';
// import Header from './components/Header';
// import { useContext } from 'react';
// import { AppContext } from './components/Context';
// import { useGlobalContext } from './components/Context';
// import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  // const data = useGlobalContext();
  return (
    <div className="App">
       <Search />
       <Pagination />
       <Stories />
      
   
    </div>
  );
}

export default App;
