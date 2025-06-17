import Home from "./Home/Home";
import { useState } from "react";
import { Outlet } from "react-router";

function App() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [hospitalsList, setHospitalsList] = useState([]);

  return (
    <div style={{ height: "100vh", backgroundColor: "white" }}>
      <Outlet
        context={{
          selectedState,
          setSelectedState,
          selectedCity,
          setSelectedCity,
          hospitalsList,
          setHospitalsList,
        }}
      />
    </div>
  );
}

export default App;
