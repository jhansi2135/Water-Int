import "./form.css";
import { useEffect, useState } from "react";
// import Color from "./ColorChange.js";

export function Form() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const json = localStorage.getItem("userName");
    json && setUserName(JSON.parse(json));
  }, []);

  const [age, setAge] = useState(0);
  useEffect(() => {
    const json = localStorage.getItem("age");
    json && setAge(JSON.parse(json));
  }, []);

  const [gender, setGender] = useState("None");
  useEffect(() => {
    const json = localStorage.getItem("gender");
    json && setGender(JSON.parse(json));
  }, []);

  const [addInfo, setAddInfo] = useState("");
  useEffect(() => {
    const json = localStorage.getItem("addInfo");
    json && setAddInfo(JSON.parse(json));
  }, []);

  const [calculate, setCalculate] = useState("");
  useEffect(() => {
    const json = localStorage.getItem("calculate");
    json && setCalculate(JSON.parse(json));
  }, []);

  const handleNameChange = function (event) {
    const newUserName = event.target.value;
    setUserName(newUserName);
    try {
      const json = JSON.stringify(newUserName);
      localStorage.setItem("userName", json);
    } catch (error) {
      console.error("Could not save Name", error);
    }
  };
  const handleAgeChange = function (event) {
    const newAge = event.target.value;
    setAge(newAge);
    try {
      const json = JSON.stringify(newAge);
      localStorage.setItem("age", json);
    } catch (error) {
      console.error("Could not save Age", error);
    }
  };
  const handleGenderChange = function (event) {
    const newGender = event.target.value;
    setGender(newGender);
    try {
      const json = JSON.stringify(newGender);
      localStorage.setItem("gender", json);
    } catch (error) {
      console.error("Could not save Gender", error);
    }
  };
  const handleAddInfoChange = function (event) {
    const newAddInfo = event.target.value;
    setAddInfo(newAddInfo);
    try {
      const json = JSON.stringify(newAddInfo);
      localStorage.setItem("addInfo", json);
    } catch (error) {
      console.error("", error);
    }
  };
  const handleCalculateClick = function (event) {
    const data = { userName, age, gender, addInfo };
    if (age >= 1 && age <= 3) {
      setCalculate("Your Task for today is to drink 0.8 litres.");
    }
    if (age >= 4 && age <= 8) {
      setCalculate("Your Task for today is to drink 1.2 litres.");
    }
    if (age >= 9 && age <= 13) {
      setCalculate("Your Task for today is to drink 1.6-1.9 litres.");
    }
    if (age >= 14 && age <= 18) {
      setCalculate("Your Task for today is to drink 1.9 - 2.6 litres.");
    }
    if (age >= 19) {
      if (gender === "Male") {
        setCalculate("Your Task for today is to drink 3.1 litres.");
      }
    }
    if (age >= 19) {
      if (gender === "Female") {
        if (addInfo === "None") {
          setCalculate("Your Task for today is to drink 2.2 litres.");
        }
        if (addInfo === "Pregnant-women") {
          setCalculate("Your Task for today is to drink 2.4 litres.");
        }
        if (addInfo === "Breastfeeding-women") {
          setCalculate("Your Task for today is to drink 3.1 litres.");
        }
      }
    }
    if (age <= 0) {
      setCalculate("Insufficient Data");
    }
    console.log(data);
  };

  return (
    <form className="form">
      <div className="border">
        <br />
        <br />
        <div className="sep">
          <label>Name</label>
          <br />
          <input
            type="text"
            onChange={handleNameChange}
            value={userName}
            className="input"
          />
          <br />
          <label>Age</label>
          <br />
          <input
            className="input"
            type="number"
            onChange={handleAgeChange}
            value={age}
            min="0"
            max="80"
          />
        </div>
        <br />
        <br />
        <p>Gender: </p>
        <input
          type="radio"
          id="Female"
          name="Gender"
          onChange={handleGenderChange}
          checked={gender === "Female"}
          value="Female"
          onClick={() => setGender("Female")}
        />
        <label for="Female">Female</label>
        <input
          type="radio"
          id="Male"
          name="Gender"
          onChange={handleGenderChange}
          checked={gender === "Male"}
          value="Male"
          onClick={() => setGender("Male")}
        />
        <label for="Male">Male</label>
        <br />
        <br />
        <br />
        <label for="addinfo">Additional Information</label>
        <br />
        <select
          className="input"
          name="addInfo"
          onChange={handleAddInfoChange}
          value={addInfo}
          id="addinfo"
        >
          <option value="Pregnant-women">Pregnant Women</option>
          <option value="Breastfeeding-women">Breastfeeding Women</option>
          <option value="None">None</option>
        </select>
        <br />
        <br />
        <br />
        <button
          type="button"
          className="change input"
          onClick={handleCalculateClick}
          name="calbutton"
        >
          Calculate
        </button>
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <div className="border">
        <br />
        {calculate}
        <br />
        <br />
      </div>
    </form>
  );
}
