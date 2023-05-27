import React, { useState } from "react";
import 'bulma/css/bulma.css'
import Navbar from "./navbar";
import CreateTeam from "./CreateTeam";
import Footer from "./Footer";
import axios from 'axios';
import Accepted from "./accepted";
import Pending from "./pending";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import Teams from "./teams";

function App() {
  const [teams, setTeams] = useState([]);

  const addTeam = async (newTeam) => {
    const response = await axios.post('http://localhost:3004/card', {
      value: newTeam
    });
    const updatedTeam = [...teams, response.data.value];
    setTeams(updatedTeam);
  }

  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/dashboard" element={<Dashboard teams={teams} />} />
        <Route path="/create" element={<CreateTeam onAdd={addTeam} />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Accepted" element={<Accepted />} />
        <Route path="/Pending" element={<Pending />} />
      </Routes>
      <TeamList teams={teams}/>
      <Footer />
    </div >
  );
}

export default App;
