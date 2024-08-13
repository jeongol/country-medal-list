// App.jsx
import React, { useState } from "react";
import "./App.css";

function App() {
  // const [reset, setReset] = useState({
  //   country: "",
  //   goldMedals: 0,
  //   silverMedals: 0,
  //   bronzeMedals: 0,
  // });


  const [countries, setCountries] = useState([]);


  const [country, setCountry] = useState("");


  const [goldMedals, setGoldMedals] = useState(0);


  const [silverMedals, setSilverMedals] = useState(0);


  const [bronzeMedals, setBronzeMedals] = useState(0);



  
  const handleAddCountry = (e) => {
    e.preventDefault();

    const newCountry = {
      country: country,
      gold: parseInt(goldMedals),
      silver: parseInt(silverMedals),
      bronze: parseInt(bronzeMedals),
    };

    setCountries([...countries, newCountry]);

    setCountry("");
    setGoldMedals(0);
    setSilverMedals(0);
    setBronzeMedals(0);
  
  };


  return (
    <div className="container">
      <h1>2024 파리 올림픽 메달 트래커</h1>
      <form className="input-group">
        <div className="input-field">
          <label>국가명</label>
          <input type="text" className="" onChange={  (e) => {setCountry(e.target.value)} }></input>
        </div>
        <div className="input-field">
          <label>금메달</label>
          <input type="number" className="" onChange={  (e) => {setGoldMedals(e.target.value)} }></input>
        </div>
        <div className="input-field">
          <label>은메달</label>
          <input type="number" className="" onChange={  (e) => {setSilverMedals(e.target.value)} }></input>
        </div>
        <div className="input-field">
          <label>동메달</label>
          <input type="number" className="" onChange={  (e) => {setBronzeMedals(e.target.value)} }></input>
        </div>
        <div className="button-group">
          <button type="submit" onClick={handleAddCountry} >국가 추가</button>
          <button type="submit" >업데이트</button>
        </div>
      </form>
      <div>
        <p>아직 추가된 리스트 없음</p>
      </div>
    </div>
  );


} 


export default App;