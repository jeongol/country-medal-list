// App.jsx
import React, { useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = React.useState([]);
  const [countryInput, setCountry] = React.useState("");
  const [goldMedals, setGoldMedals] = React.useState(0);
  const [silverMedals, setSilverMedals] = React.useState(0);
  const [bronzeMedals, setBronzeMedals] = React.useState(0);

  const cher = () => {
    countries.find((country) => {
      if (country.name.toLowerCase() === countryInput.toLowerCase()) {
        return true;
      } else {
        return false;
      }
    })
  }

  const handleAddCountry = (e) => {
    e.preventDefault();

    if (cher) {
      alert("이미 등록된 국가입니다.")
    } else {
      const newCountry = {
        name: countryInput,
        gold: goldMedals,
        silver: silverMedals,
        bronze: bronzeMedals,
      };
      setCountries([...countries, newCountry]);
    }
  }

  const updateCountries = (e) => {
    e.preventDefault();

    if (cher) {
      setCountries(
        countries.map((country) => {
          if (country.name.toLowerCase() === countryInput.toLowerCase()) {
            return {
              name: country.name,
              gold: goldMedals,
              silver: silverMedals,
              bronze: bronzeMedals,
            }
          } else {
            return country;
          }
        })
      )
    }
  }

  const deletecountry = (name) => {
    console.log(name);
    setCountries(countries.filter((country) => {
      if (country.name.toLowerCase() !== name) {
        return country
      };
    }))
  }


  return (
    <div className="container">
      <h1>2024 파리 올림픽 메달 트래커</h1>
      <form className="input-group">
        <div className="input-field">
          <label>국가명</label>
          <input type="text" className="" onChange={(e) => { setCountry(e.target.value) }}></input>
        </div>
        <div className="input-field">
          <label>금메달</label>
          <input type="number" className="" onChange={(e) => { setGoldMedals(e.target.value) }}></input>
        </div>
        <div className="input-field">
          <label>은메달</label>
          <input type="number" className="" onChange={(e) => { setSilverMedals(e.target.value) }}></input>
        </div>
        <div className="input-field">
          <label>동메달</label>
          <input type="number" className="" onChange={(e) => { setBronzeMedals(e.target.value) }}></input>
        </div>
        <div className="button-group">
          <button type="submit" onClick={handleAddCountry} >국가 추가</button>
          <button onClick={updateCountries}>업데이트</button>
        </div>
      </form>
      <div class="table-warrppe">
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => {
              return (
                <tr key={country.name}>
                  <td>{country.name}</td>
                  <td>{country.gold}</td>
                  <td>{country.silver}</td>
                  <td>{country.bronze}</td>
                  <td clessName="delete-btn" onClick={(e) => {
                    deletecountry(country.name)
                    }}>삭제</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )


}


export default App;